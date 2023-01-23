describe('Location', () => {
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
    context('Location', () => {
        it('cy.location() - get window.location', () => {
            cy.location().should((location) => {
                expect(location.hash).to.be.empty
                expect(location.href).to.eq("http://localhost:3000/admin/overview/sales")
            })
        })
    }) 
})
