//cyp-0002 "Create, Edit, Deactivate, Enable"
describe('Members', () => {
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
    it('Edit a Member', function() {
        cy.get('[href="/admin/members"]').click();
        cy.get(':nth-child(4) > .px-6.flex > .block > .flex').click();
        cy.get('[class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"]').click();
        cy.get('[id="member-Person.FirstName"]').type(" edit");
        cy.get('[class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"]').click();
    })
    it('Deactivate a Member', function() {
        cy.get('[href="/admin/members"]').click();
        cy.get(':nth-child(1) > .px-6.flex > .block > .flex').click();
        cy.get('[class="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"]').click();
        cy.get('[class="flex items-center pb-2 text-slate-600 hover:text-gray-900 pl-2 w-full py-1"]').click();
        cy.get('[class="swal2-confirm bg-[#0CBA91] w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
    it('Enable a Member', function() {
        cy.get('[href="/admin/members"]').click();
        cy.get('[class="h-[38px] inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"]').click();
        cy.get('[value="inactive"]').check();
        cy.get('[class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]').click();
        cy.get(':nth-child(1) > .px-6.flex > .block > .flex').click();
        cy.get('[id="member-form"]').click();
        cy.get('[class="swal2-confirm bg-[#0CBA91] w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"]').click();
    })
})
