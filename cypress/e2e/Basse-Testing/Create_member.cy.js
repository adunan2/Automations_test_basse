
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
    it('Create a Member', function() {
        cy.get('[href="/admin/members"]').click();
        cy.get('[href="/admin/members/new/"]').click();
        const aleatorio = Math.round(Math.random()*10000);
        let UserName = "Member" + aleatorio;
        let email = UserName + "@fakeemail.com";
        cy.get('[id="member-Person.Email"]').type(email);
        cy.get('[id="member-Person.Email"]').type('{enter}');
        cy.get(':nth-child(3) > .shadow-sm > :nth-child(1) > .has-error > .mt-1').should('have.text','First name can not be blank.');
        cy.get(':nth-child(4) > .shadow-sm > :nth-child(1) > .has-error > .mt-1').should('have.text','Last name can not be blank.');
        cy.get('[id="member-Person.FirstName"]').type('Member');
        cy.get('[id="member-Person.LastName"]').type(aleatorio);
        cy.get('[id="member-EmployeeManager"]').select("Andres Dunan V.");
        cy.get('[id="member-Fields[0].Value"]').type('30');
        cy.get('[id="member-Fields[1].Value"]').type('40');
        cy.get('[id="member-Fields[2].Value"]').type('25');
        cy.get('[id="member-Fields[3].Value"]').type('Single');
        cy.get('[id="member-Fields[4].Value"]').type('Rini');
        cy.get('[id="member-Fields[5].Value"]').type('1');
        cy.get('.mt-4 > .inline-flex').click();
    })
})
