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
    
    "Andres Dunan"
    
    })
})