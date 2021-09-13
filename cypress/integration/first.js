//const cypress = require("cypress")

describe('My First Test', () => {
  
  it('Can load the page', () => {
    cy.visit("/test.html")
    cy.title().should('eq', 'QA Web Automation Activity')
  })
 
  it('Can have another passing case', () => {
    expect(true).to.equal(true)
  })
  
  it('Can be hard to find a good selector', () => {
    cy.visit("/test.html")
    
    // We're trying to press a particular button, but can't find a good selector for it
    // Page will include buttons with some kind of automatically generated identifiers (or at least they can look that way)
    // Target button will not be a button at all, but rather a div with some text
    
    // Help! This worked, but then the page changed, and now it's failing!
    cy.get('html body div div p button').click()
  })
  
  it('Can have a timing issue', () => {
    cy.visit("/test.html")
    
    cy.get("action-button").click()
    
    cy.get("updated-area").should('have.text', 'Update Successful')
  })
  
  it('The modal can be shown', () => {
    cy.visit("/test.html")
    
    cy.get('#button_container button').then(($btn) => {
      $btn.click()
      cy.get('#modal h2').should('be.visible')
    })
  })
  
  it('Can have clicks get intercepted', () => {
    cy.visit("/test.html")
    
    cy.get('#button_container button').then(($btn) => {
      $btn.click()
      cy.get('#modal h2').should('be.visible')
      $btn.click()
      cy.get('#modal h2').should('not.be.visible')
    })
  })
  

  
})
