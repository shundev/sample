describe('Sample page open2', () => {

  it('add todo item', () => {
    cy.access()
    cy.get('#new-todo-input').type('aiueo2')
    cy.clickBtn('Add')
    cy.screenshot()
  })
})