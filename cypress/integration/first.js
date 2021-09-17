//const cypress = require("cypress")

describe('My First Test', () => {
  
  it('Can load the page', () => {
    cy.visit("/test.html")
    cy.title().should('eq', 'QA Web Automation Activity')
  })
  
  it('Check a menu item', () => {
    cy.visit("/test.html")
    
    // Help! This worked before, but then the page changed, and now it's failing!
    cy.get('html body div div button').click()

    cy.get("h5").first().should("contain", "Tomato Soup")
  })
  
  it('Can have a timing issue', () => {
    cy.visit("/test.html")
    
    cy.get('#open_button').click()

    cy.log(cy.get("#contact h1").its("text"));
    
    cy.get('#contact button').click()
  })
  
  it('Can toggle the contact form', () => {
    cy.visit("/test.html")

    cy.contains("div", "show contact").click()
    cy.contains('Reserve a table').should('be.visible')

    cy.contains("div", "hide contact").click()
    cy.contains('Reserve a table').should('not.be.visible')
  })
  

  
})
