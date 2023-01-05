import 'cypress-file-upload';

// Login  
Cypress.Commands.add('loginByToken', (token) => {
    cy.request({
    method: 'POST',
    url: 'http://localhost:3000/auth/login',
    gzip: true,
    form: true,
    body: {
        authenticity_token: token,
        login: 'adunan@wawand.co',
        password: ''
    }
    })
 })
//  describe('Realizo un request', function(){
//     it('test-login', function(){
//         cy.request('http://localhost:3000/auth/login')
//             .its('body')
//             .then((body) => {
    
//                 const $html = Cypress.$(body);
//                 const token  = $html.find("input[name=authenticity_token]").val()
//     })
//     })
//     })




