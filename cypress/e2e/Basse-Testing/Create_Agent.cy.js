//cyp-0003 "Create, Edit, Delete, Active"//
describe('Agent', () => {
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
     it('Create an Agent', function() {
        const aleatorio = Math.round(Math.random()*1000);
        const porcent = Math.round(Math.random()*100);
        const Name1 = Math.round(Math.random()*100);
        const Name2 = Math.round(Math.random()*100);
        let UserName = "Member" + aleatorio;
        let email = UserName + "@fakeemail.com";
        let FirstName = "Test " + Name1;
        let LastName = "Test " + Name2;
        cy.get('[href="/admin/agents"]').click();
        cy.get('[href="/admin/agents/new/"]').click();
        cy.get('[id="agent-Person.FirstName"]').type(FirstName);
        cy.get('[id="agent-Person.LastName"]').type(LastName);
        cy.get('[id="agent-Person.Email"]').type(email);
        cy.get('[id="agent-CommissionsPercentage"]').clear();
        cy.get('[id="agent-CommissionsPercentage"]').type(porcent);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Edit an Agent', function() {
        cy.get('[href="/admin/agents"]').click();
        cy.get(':nth-child(1) > .block > .py-6 > .min-w-0.flex > .min-w-0').click();
        cy.get('[class="bg-white py-2 px-4 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('[id="agent-Person.FirstName"]').type("1");
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Delete an Agent', function() {
        cy.get('[href="/admin/agents"]').click();
        cy.get(':nth-child(1) > .block > .py-6 > .min-w-0.flex > .min-w-0').click();
        cy.get('[class="bg-red-600 py-2 px-4 mr-2 border border-red-400 rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"]').click();
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
    it('Active an Agent', function() {
        cy.get('[href="/admin/agents"]').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('[value="inactive"]').check();
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('[class="min-w-0 flex-1 px-4 md:grid md:grid-cols-7 md:gap-8 pr-12"]').click();
        cy.get('[class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"]').click();
    })
})
