describe('Sample page open', () => {
  it('visit', () => {
    cy.access()
    cy.get('h1').should('contain', 'My To-Do List')
    cy.screenshot()
  })

  it('add todo item', () => {
    cy.get('#new-todo-input').type('aiueo')
    cy.screenshot()
  })
})