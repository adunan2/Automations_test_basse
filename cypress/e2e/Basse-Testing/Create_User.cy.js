describe('Create Users', () => {
    beforeEach("LOGIN", function(){
         cy.visit("http://localhost:3000/auth/login");
         cy.url().should('include','/auth/login')
         cy.get('#email').type("adunan@wawand.co");
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
    it('Add an User', function() {
        cy.get('[href="/admin/users"]').click();
        cy.get('[href="/admin/users/new/"]').click();
        const aleatorio = Math.round(Math.random()*10000);
        let UserName = "Member" + aleatorio;
        let email = UserName + "@fakeemail.com";
        cy.get('[id="user-Person.Email"]').type(email);
        cy.get('[id="user"]').click();
        cy.get('[id="user-Person.FirstName"]').type('Member');
        cy.get('[id="user-Person.LastName"]').type(aleatorio);
        cy.get('.mt-4 > .inline-flex').click();
    })
 })