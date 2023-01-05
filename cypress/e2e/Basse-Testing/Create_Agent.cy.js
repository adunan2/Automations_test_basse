//cyp-001//
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
     it('Add an Agent', function() {
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
})
