/* global given, when, then */
console.log('Hello');
given('I am on the "/" page', () => {
  cy.visit('/');
})

then('I see the vue logo', () => {
  cy.get('img[src="../assets/logo.png"]');
})