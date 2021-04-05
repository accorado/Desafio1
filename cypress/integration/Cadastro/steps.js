// implementação dos passos descritos nas features

/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();


When(/^informar meus dados$/, () => {
    //click para fazer o cadastro
        cy.visit('index.php');
        cy.get('a[class="login"]').click();

              
    //redirecionamento da próxima pagina e mostrando o assert no teste
        cy.url().should('contain', 'index.php?controller=authentication&back=my-account');

});

When(/^salvar$/, () => {
    // colocar e-mail e logo depois clicar em "create an account"
        cy.get('input#email_create').type(chance.email())
        cy.get('button#SubmitCreate').click();
});

Then(/^devo ir para a página de cadastro$/, () => {
    cy.url().should('contain', 'index.php?controller=authentication&back=my-account#account-creation');
 });