describe('Counter', () => {
  it('can increment', () => {
    cy.visit('/')
    cy.get('button').contains('+').click()
    cy.contains('.total', '1')
  })

  it('can decrement', () => {
    cy.visit('/')
    cy.get('button').contains('-').click()
    cy.contains('.total', '-1')
  })

  it('can reset', () => {
    cy.visit('/')
    cy.get('button').contains('+').click()
    cy.get('button').contains('C').click()
    cy.contains('.total', '0')
  })

  it('displays overflow', () => {
    cy.visit('/')
    cy.get('button').contains('+')
      .click().click().click().click().click()
      .click().click().click().click().click()
      .click()
    cy.contains('.total', '11').should('have.css', 'color', 'rgb(255, 0, 0)')
    cy.contains('.total', '11').should('have.attr', 'style', 'color: red;')
  })
})