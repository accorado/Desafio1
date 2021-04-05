// implementação dos passos descritos nas features

/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

When(/^informar meus dados$/, () => {
    cy.visit('index.php?controller=authentication&back=my-account#account-creation');

    //cadastro doss dados
    
});

When(/^salvar$/, () => {

 //click para submeter o cadastro
 cy.get('').click();
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    //cadastro com sucesso


    
});