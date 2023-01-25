//cyp-0008 "Add Notification, Edit, Copy, Delete"
describe('Create Notification', () => {
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
    it('Add a Notification', function() {

        const aleatorio = Math.round(Math.random()*1000);
        const aleatorio_1 = Math.round(Math.random()*1000);
        let new_name = "Test " + aleatorio
        let other = aleatorio_1
        cy.get('[href="/admin/notifications"]').click();
        cy.get('[class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"]').click();
        cy.get('[id="notification-Name"]').type(new_name);
        cy.get('[id="notification-Kind"]').select("Stakeholders");
        cy.get('[class="trix-content h-64 scrollbar  "]').type("Test " + other);
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();   
    })
    it('Edit a Notification', function() {

        const date = new Date(); 
        const year = new Date();  
        const Month = new Date();  
        date.setDate(date.getDate() + 1);
        year.setDate(year.getDate());
        Month.setDate(Month.getDate());

        const tomorrow = date.toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"});
        console.log(tomorrow);
        const today = year.toLocaleDateString('en-us', { year:"numeric"});
        console.log(today);
        const month = Month.toLocaleDateString('en-us', { month:"long"});
        console.log(month);

        cy.get('[href="/admin/notifications"]').click();
        cy.get(':nth-child(1) > .grid-cols-4 > .col-span-3 > a > .min-w-0').click();
        cy.get('[class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"]').click();
        cy.get('#notification-Name').type(" Edit");
        cy.get('.trix-content').type(" Edit");
        cy.get('#date-notification').click();
        cy.get('.numInput').type(today);
        cy.get('.flatpickr-monthDropdown-months').select(month);
        cy.get(`[aria-label="${tomorrow}"]`).click()
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();  
    }) 
    it('Edit_2 a Notification', function() {
        const date = new Date(); 
        const year = new Date();  
        const Month = new Date();  
        date.setDate(date.getDate() + 1);
        year.setDate(year.getDate());
        Month.setDate(Month.getDate());

        const tomorrow = date.toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"});
        console.log(tomorrow);
        const today = year.toLocaleDateString('en-us', { year:"numeric"});
        console.log(today);
        const month = Month.toLocaleDateString('en-us', { month:"long"});
        console.log(month);

        cy.get('[href="/admin/notifications"]').click();
        cy.get(':nth-child(1) > .grid-cols-4 > :nth-child(2) > .text-gray-600').click();
        cy.get('#date-notification').click();
        cy.get('.numInput').type(today);
        cy.get('.flatpickr-monthDropdown-months').select(month);
        cy.get(`[aria-label="${tomorrow}"]`).click()
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();    
    }) 
    it('Copy a Notification', function() {
        cy.get('[href="/admin/notifications"]').click();
        cy.get(':nth-child(1) > .grid-cols-4 > :nth-child(2) > .text-blue-600').click();
        cy.get('.trix-content > div').type("Copy a Notification test");
    }) 
    it('Delete a Notification', function() {
        cy.get('[href="/admin/notifications"]').click();
        cy.get(':nth-child(1) > .grid-cols-4 > :nth-child(2) > .text-red-600').click();
        cy.get('.swal2-confirm').click();
    }) 
})
