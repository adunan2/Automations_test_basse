//cyp-0010 "Add Job Title, Edit_1, Edit_2, Delete_1, Delete_2"
describe('Create Job Title', () => {
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
    it('Add a Job Title', function() {

        const aleatorio = Math.round(Math.random()*100);
        const description = Math.round(Math.random()*100);
        let name = "Test " + aleatorio 
        let descr = "A description to the test " + description
        
        cy.get('[href="/admin/job_titles"]').click();
        cy.get('[href="/admin/job_titles/new/"]').click();
        cy.get('[class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 text-black focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"]').type(name);
        cy.get('[class="trix-content h-64 scrollbar "]').type(descr);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Edit a Job Title', function() {

        cy.get('[href="/admin/job_titles"]').click();
        cy.get(':nth-child(1) > .whitespace-nowrap > .py-2 > .material-symbols-outlined').click();
        cy.get('[class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 text-black focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"]').type(" edit");
        cy.get('[class="trix-content h-64 scrollbar "]').type(" other");
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Edit_2 a Job Title', function() {

        cy.get('[href="/admin/job_titles"]').click();
        cy.get(':nth-child(1) > .px-6.w-96 > .items-center > .flex > .no-underline > .font-semibold').click();
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"]').click();
        cy.get('[class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 text-black focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"]').type(" edit");
        cy.get('[class="trix-content h-64 scrollbar "]').type(" other");
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Delete a Job Title', function() {

        cy.get('[href="/admin/job_titles"]').click();
        cy.get(':nth-child(1) > .whitespace-nowrap > .text-right > .material-symbols-outlined').click();
        cy.get('.swal2-confirm').click(); 
    })
    it('Delete_2 a Job Title', function() {

        cy.get('[href="/admin/job_titles"]').click();
        cy.get(':nth-child(1) > .px-6.w-96 > .items-center > .flex > .no-underline > .font-semibold').click();
        cy.get('[class="bg-red-500 py-2 px-4 mr-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"]').click();
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
})