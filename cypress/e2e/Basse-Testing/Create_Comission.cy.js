//cyp-0006 "Create, Edit, Deactivate, Enable"
describe('Comission', () => {
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
     it('Create a Comission', function() {
        const aleatorio = Math.round(Math.random()*10);
        const aleatorio_2 = Math.round(Math.random()*100);
        let new_comission = "New Comission " + aleatorio;
        cy.get('[href="/admin/commissions"]').click();
        cy.get('[href="/admin/commissions/new/"]').click();
        cy.get('[id="agent-payment-Reference"]').type(new_comission)
        cy.get('[id="agent-payment-Amount"]').clear();
        cy.get('[id="agent-payment-Amount"]').type(aleatorio_2);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
     })
    it('Edit a Comission', function() {
         cy.get('[href="/admin/commissions"]').click();
         cy.get(':nth-child(1) > .justify-end > .py-2').click();
         cy.get('[class="mt-1 block flex w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"]').type(" edit");
         cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
     })
    it('Delete a Comission', function() {
        cy.get('[href="/admin/commissions"]').click();
        cy.get(':nth-child(1) > .justify-end > .text-right').click(); 
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();  
     })
    it('Filter for agent', function() {
        cy.get('[href="/admin/commissions"]').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('#filter-AgentID').select("Ralph Arnold");
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('.capitalize').contains("Agent: Ralph Arnold");
    })
    it('view "Commissions" title', function(){
        cy.get('[href="/admin/commissions"]').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('#filter-AgentID').select("Ralph Arnold");
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('[class="text-xl font-semibold leading-7 text-gray-900 sm:text-2xl sm:truncate"]').contains('Commissions');
    })
    it('view "clear" button', function(){
        cy.get('[href="/admin/commissions"]').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('#filter-AgentID').select("Ralph Arnold");
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('.mb-4 > :nth-child(1) > .bg-gray-200').contains('Clear');
    })
    it('view pagination', function(){
        cy.get('[href="/admin/commissions"]').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('#filter-AgentID').select("Ralph Arnold");
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get('[class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"]').trigger('mousedown');
     })
 })
 