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
    // preenchendo os dados  
        cy.get('input#id_gender2').check('2');
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#passwd').type('Bootc@mp2021');
        cy.get('select#days').select('16');
        cy.get('select#months').select('8');
        cy.get('select#years').select('1987');
        cy.get('input#firstname').type(chance.first());
        cy.get('input#lastname').type(chance.last());
        cy.get('input#company').type(chance.company());
        cy.get('input#address1').type(chance.address());
        cy.get('input#address2').type(chance.address());
        cy.get('select#id_country').select('21');
        cy.get('input#city').type(chance.city());
        cy.get('select#id_state').select('7');
        cy.get('input#postcode').type('01234');
        cy.get('input#phone_mobile').type(chance.phone({ formatted: false}));
        cy.get('input#alias').type(chance.suffix());


    //submeter os dados do usuário para registro
        cy.get('button#submitAccount').click();

    //mostrando o assert no teste e redirecionando para a página de cadastro feito
        cy.url().should('contain', 'index.php?controller=my-account');



 });