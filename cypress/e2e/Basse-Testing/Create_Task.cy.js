//cyp-0005 "Add, Mark as Resolved the Task (Checkbox), Mark as Resolved the Task Button (Mark as Resolved) "
describe('Task', () => {
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
     it('Add a Task', function() {
        const need = Math.round(Math.random()*100);
        const information = Math.round(Math.random()*100);
        let create_task = "Task " + need ;
        let What_do_you_need = create_task
        let Test_task = "New Test Task " + information;
        let other = Test_task;
        
        cy.get('[class="material-symbols-outlined -mr-1 ml-2 h-5 w-5 loaded"]').click();
        cy.get('[href="/members"]').click();
        cy.get('[class="relative inline-block pr-3"]').click();
        cy.get('[href="/members/hr-request/new/"]').click();
        cy.get('[id="member-request-MemberNeed"]').type(What_do_you_need);
        cy.get('[id="member-request-MemberNeedDescription"]').type(other);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click(); 
    })
    it('Mark as Resolved the Task (Checkbox)', function() {
        cy.get('[href="/admin/tasks"]').click();
        cy.get(':nth-child(1) > .group > .relative').click();
        cy.get('[class="swal2-confirm bg-[#0CBA91] w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click(); 
    })
    it('Mark as Resolved the Task Button (Mark as Resolved)', function() {
        cy.get('[href="/admin/tasks"]').click();
        cy.get(':nth-child(1) > .py-4').click();
        cy.get('[class="bg-green-500 text-white p-2 rounded hover:bg-green-600 flex px-3"]').click(); 
        cy.get('[class="swal2-confirm bg-[#0CBA91] w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
})