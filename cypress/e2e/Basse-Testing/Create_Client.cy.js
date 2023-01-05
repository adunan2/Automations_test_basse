describe('Create Members', () => {
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
     it('Add an Client', function() {
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
})