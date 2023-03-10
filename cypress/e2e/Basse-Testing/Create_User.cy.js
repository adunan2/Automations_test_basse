//cyp-0001 "Create, Edit, Delete"
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
    it('Edit an User', function() {
        cy.get('[href="/admin/users"]').click();
        cy.get(':nth-child(7) > :nth-child(1) > .flex-row > .flex > .no-underline > .mr-10').click();
        cy.get('[class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"]').click();
        cy.get('[name="Permissions[1].Name"]').check();
        cy.get('[name="Permissions[2].Name"]').check();
        cy.get('[name="Permissions[3].Name"]').check();
        cy.get('[name="Permissions[4].Name"]').check();
        cy.get('[name="Permissions[5].Name"]').check();
        cy.get('[name="Permissions[6].Name"]').check();
        cy.get('[name="Permissions[7].Name"]').check();
        cy.get('[name="Permissions[8].Name"]').check();
        cy.get('[name="Permissions[9].Name"]').check();
        cy.get('[name="Permissions[10].Name"]').check();
        cy.get('[name="Permissions[11].Name"]').check();
        cy.get('[name="Permissions[12].Name"]').check();
        cy.get('[name="Permissions[1].Name"]').uncheck();
        cy.get('[name="Permissions[2].Name"]').uncheck();
        cy.get('[name="Permissions[3].Name"]').uncheck();
        cy.get('[name="Permissions[4].Name"]').uncheck();
        cy.get('[name="Permissions[5].Name"]').uncheck();
        cy.get('[name="Permissions[6].Name"]').uncheck();
        cy.get('[name="Permissions[7].Name"]').uncheck();
        cy.get('[name="Permissions[8].Name"]').uncheck();
        cy.get('[name="Permissions[9].Name"]').uncheck();
        cy.get('[name="Permissions[10].Name"]').uncheck();
        cy.get('[name="Permissions[11].Name"]').uncheck();
        cy.get('[name="Permissions[12].Name"]').uncheck();
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Delete an User', function() {
        cy.get('[href="/admin/users"]').click();
        cy.get(':nth-child(16)>.justify-end>.text-right').click();
        cy.get('[class="swal2-confirm bg-red-600 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
 })
