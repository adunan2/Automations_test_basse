//cyp-0007-1 "Add a Team, Edit a Team, Edit Stakeholders, Register Timesheet, Edit Timesheet, Edit(Other) Timesheet, Delete Timesheet, Copy Timesheet"
describe('Teams', () => {
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
    it('Add a Team', function() {

        const aleatorio = Math.round(Math.random()*100);
        const aleatorio_1 = Math.round(Math.random()*10000);
        let Team01 = "Team #" + aleatorio;
        let ClientCode = aleatorio_1;
        cy.get('[href="/admin/teams"]').click();
        cy.get('[href="/admin/teams/new/"]').click();
        cy.get('[id="team-Name"]').type(Team01);
        cy.get('[id="add-stakeholders"]').click();
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    // it('Edit a Team', function() {
        
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('[class="bg-white py-2 px-4 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
    //     cy.get('[id="team-Name"]').type(" Edit");
    //     cy.get('[id="team-ClientCode"]').type("222");
    //     cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    // })
    // // cyp-0007-1 "Delete Team"
    // it('Inactive a Team', function() {
        
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('[class="bg-white py-2 px-4 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
    //     cy.get('#team-Until').click()
    //     cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    //     cy.get('.mt-4 > .inline-flex').click()
    // })
    // it('Edit Stakeholders', function() {
        
    //     const aleatorio_03 = Math.round(Math.random()*100);
    //     let edit_stakeholders = aleatorio_03
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('.border-b > :nth-child(2) > .py-2').click();
    //     cy.get(':nth-child(1) > .block > div.flex > .py-6').click();
    //     cy.get('.mt-4 > .bg-white').click();
    //     cy.get('[id="stakeholder-Person.FirstName"]').click().type(" Edit");
    //     cy.get('[id="stakeholder-Person.LastName"]').click().type(" Edit");
    //     cy.get('.mt-4 > .inline-flex').click();
    //     })
    // it('Register Timesheet', function() {
        
    //     const aleatorio = Math.round(Math.random()*100);
    //     let edit_time = aleatorio
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('.border-b > :nth-child(3) > .py-2').click();
    //     cy.get('[class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"]').click();
    //     cy.get('[id="timesheet-Month"]').select("October");
    //     cy.get('#timesheet-Year').select("2022");
    //     cy.get('[id="timesheet-MemberTimesheets[0].TeamMemberID"]').select("Miguel Dunan");
    //     cy.get('.mt-4 > .inline-flex').click();
    //     })
    // it('Edit Timesheet', function() {
        
    //     const aleatorio_01 = Math.round(Math.random()*100);
    //     let edit_time_01 = aleatorio_01
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('.border-b > :nth-child(3) > .py-2').click();
    //     cy.get(':nth-child(1) > .align-middle > .flex > .text-gray-600 > .material-symbols-outlined').click();
    //     cy.get('[name="MemberTimesheets[0].Quantity"]').clear();
    //     cy.get('[name="MemberTimesheets[0].Quantity"]').type(edit_time_01);
    //     cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    // })
    // it('Edit(Other) Timesheet', function() {
        
    //     const aleatorio_02 = Math.round(Math.random()*100);
    //     let edit_time_02 = aleatorio_02
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('.border-b > :nth-child(3) > .py-2').click();
    //     cy.get(':nth-child(1) > .align-middle > .flex-grow > a > .min-w-0 > .py-auto').click();
    //     cy.get('.mt-4 > .bg-white').click();
    //     cy.get('[name="MemberTimesheets[0].Quantity"]').clear();
    //     cy.get('[name="MemberTimesheets[0].Quantity"]').type(edit_time_02);
    //     cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    //  })
    // it('Delete Timesheet', function() {
        
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('.border-b > :nth-child(3) > .py-2').click();
    //     cy.get(':nth-child(1) > .align-middle > .flex > .items-center').click();
    //     cy.get('.swal2-confirm').click();

    // })
    // it('Copy Timesheet', function() {
        
    //     cy.get('[href="/admin/teams"]').click();
    //     cy.get(':nth-child(1) > .block > .px-4 > .min-w-0.flex > .min-w-0 > :nth-child(1)').click();
    //     cy.get('.border-b > :nth-child(3) > .py-2').click();
    //     cy.get(':nth-child(1) > .align-middle > .flex > .text-gray-600 > .material-symbols-outlined').click();
    //     cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    // })
})










