//const cypress = require("cypress")

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  
  it('Can load the page', () => {
    cy.visit("/test.html")
    cy.contains("The Page").should('be.visible')
  })
})
