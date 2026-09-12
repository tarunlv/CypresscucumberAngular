import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the dashboard', () => {
  cy.visit('/dashboard');
});

When('I select Features from the sidebar', () => {
  cy.contains('nav a', 'Features').click();
});

Then('I should see the Features page', () => {
  cy.url().should('include', '/features');
  cy.get('h1').should('contain.text', 'Features');
});
