/// <reference types="cypress"/>

//Biblioteca para dados aleatórios
let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('cadastro de usuário no site', () => {

              
    //Base Url + index.php
        cy.visit('index.php');


    //click para fazer o cadastro
        cy.get('a[class="login"]').click();

              
    //redirecionamento da próxima pagina e mostrando o assert no teste
        cy.url().should('contain', 'index.php?controller=authentication&back=my-account');


    // colocar e-mail e logo depois clicar em "create an account"
        
        cy.get('input#email_create').type(chance.email())
        cy.get('button#SubmitCreate').click();


    //mostrando o assert no teste
        cy.url().should('contain', 'index.php?controller=authentication&back=my-account#account-creation');

       

    });
});



// elementos

//'a[class="login"]'
// input#email_create
//button#SubmitCreate
