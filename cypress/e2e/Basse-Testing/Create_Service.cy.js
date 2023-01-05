//cyp-002//
describe('Create Service', () => {
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
     it('Add a Service', function() {
        const Name1 = Math.round(Math.random()*100);
        const Description = Math.round(Math.random()*100);
        let Name = "Name " + Name1;
        let Desc = "New "+"Test " + Description
        cy.get('[href="/admin/services"]').click();
        cy.get('[href="/admin/services/new/"]').click();
        cy.get('[id="service-Name"]').type(Name);
        cy.get('[id="service-Description"]').type(Desc);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click(); 
    })
    it('Delete a Service', function() {
        cy.get('[href="/admin/services"]').click();
        cy.get(':nth-child(1) > .justify-end > .text-right').click();
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
    it('Edit a Service', function() {
        const Name1 = Math.round(Math.random()*100);
        let Other = Name1
        cy.get('[href="/admin/services"]').click();
        cy.get(':nth-child(1) > .justify-end > .py-2').click();
        cy.get('[id="service-Name"]').type(' '+ Other);
        cy.get('[id="service-Description"]').type(Other);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();  
    })
})