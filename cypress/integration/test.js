describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit("http://localhost:3000")
      cy.get('#name').contains('Nguyen Tien Anh')
        //cy.get('#one').contains('Google').click()
        // cy.url().should('api', 'api')
    })
  })