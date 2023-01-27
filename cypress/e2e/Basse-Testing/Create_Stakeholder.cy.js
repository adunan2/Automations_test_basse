//cyp-0009 "Add a Stakeholder, Edit, Delete"
describe('Create Stakeholder', () => {
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
    it('Add a Stakeholder', function() {

        const aleatorio = Math.round(Math.random()*100);
        let new_stakeholder = "Test" + aleatorio + "@email.com"
        let name = "Test " + aleatorio
        let last_name = "Other last name"

        cy.get('[href="/admin/stakeholders"]').click();
        cy.get('[href="/admin/stakeholders/new/"]').click();
        cy.get('[id="stakeholder-Person.FirstName"]').type(name);
        cy.get('[id="stakeholder-Person.LastName"]').type(last_name);
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .choices > .choices__inner').click();
        cy.get('[id="choices--stakeholder-TeamIDs-item-choice-1"]').click();
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .choices > .choices__inner').click();
        cy.get('[id="choices--stakeholder-ClientIDs-item-choice-2"]').click();
        cy.get('[id="stakeholder-Person.Email"]').type(new_stakeholder);
        cy.get('.mt-4 > .inline-flex').click();  
    })
    it('Edit Stakeholder', function() {

        cy.get('[href="/admin/stakeholders"]').click();
        cy.get(':nth-child(1) > a > .bg-white > .col-span-3').click();
        cy.get('[class="bg-white py-2 px-4 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('[id="stakeholder-Person.FirstName"]').type(" edit");
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Delete Stakeholder', function() {

        cy.get('[href="/admin/stakeholders"]').click();
        cy.get(':nth-child(1) > a > .bg-white > .col-span-3').click();
        cy.get('[class="bg-red-500 py-2 px-4 mr-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"]').click();
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
})