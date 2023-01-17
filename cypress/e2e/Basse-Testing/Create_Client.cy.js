//cyp-0004 "Create, Edit, Delete, View inactive Client"
describe('Client', () => {
    beforeEach("LOGIN", function(){
         cy.visit("http://localhost:3000/auth/login");
         cy.url().should('include','/auth/login')
         cy.get('#email').type("adunan2@testing.com");
         cy.wait(1000);
         cy.get(':nth-child(3) > .w-full').click();
         cy.task('downloads', '../../../../private/var/folders/td/xzgkrsh17g79cg9tc82thmsw0000gn/T/').then(after => {
             const filteredFiles = after.filter(file => file.includes('your_login_link_to_basse_0_'))
             const ff = filteredFiles.map(ff => ff)
         cy.readFile(`../../../../private/var/folders/td/xzgkrsh17g79cg9tc82thmsw0000gn/T/${ff[0]}`).then(doc => {
             const content = doc
             const regex = /token=[a-zA-Z0-9%=&._;-]*/
             const linkWithToken = content.match(regex)
         cy.get('html').then((res) => {
                 let elemHtml = res.get(0)
                 elemHtml.innerHTML = content
                })
                cy.get(':nth-child(2) > a').click();
             })      
         })  
     })
     it('Add a Client', function() {
        const aleatorio = Math.round(Math.random()*10000);
        const number = Math.round(Math.random()*10000000000);
        const address = Math.round(Math.random()*100);
        const address1 = Math.round(Math.random()*100);
        const address2 = Math.round(Math.random()*100);
        let UserClient = "Client " + aleatorio;
        let other = UserClient;
        let UserNumber = number
        let otherNumber = UserNumber;
        let addressclient = "CRA " + address + " Cll " + address1 + " - " + address2 ;
        let otheraddress = addressclient
        cy.get('[href="/admin/clients"]').click();
        cy.get('[href="/admin/clients/new/"]').click();
        cy.get('[id="client-Name"]').type(other);
        cy.get('[id="client-AgentID"]').select('Oran Bahringer Hassan Schumm');
        cy.get('[id="client-Phone"]').type(otherNumber)
        cy.get('[id="client-Address"]').type(otheraddress)
        cy.get('[id="add-team-members"]').type('ad v')
        cy.get('li[class="hover:bg-white py-2 px-4"] > .flex > div > .cursor-pointer').click();
        cy.get('[value="Create Client"]').click();
    })
    it('Edit Client', function(){
        cy.get('[href="/admin/clients"]').click();
        cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0').click();
        cy.get('[class="bg-white py-2 px-4 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('[id="client-Name"]').type(" edite");
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Delete Client', function(){
        cy.get('[href="/admin/clients"]').click();
        cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0').click();
        cy.get('[class="bg-red-500 py-2 px-4 mr-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"]').click();
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
    it('View inactive Client', function(){
        cy.get('[href="/admin/clients"]').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('[value="inactive"]').check();
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0').should('be.visible');
    })
})