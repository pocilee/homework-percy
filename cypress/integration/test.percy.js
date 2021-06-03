describe('Integration test with visual testing', () => {
    it('Loads the homepage', () => {
      cy.visit('/login');
      cy.percySnapshot();
    });
});