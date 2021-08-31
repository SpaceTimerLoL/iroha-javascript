/* eslint-disable spaced-comment */
/// <reference types="cypress" />

it('Hello', () => {
    cy.intercept('/api/config', { fixture: 'config' }).as('get-config');

    cy.visit('/').wait('@get-config');

    cy.fixture('public_key_hex').then((hex) => {
        cy.contains(`Public key payload hex is: ${hex}`);
    });
});
