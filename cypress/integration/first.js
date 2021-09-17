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
    
    cy.get('#open_button').then(($btn) => {
      $btn.click()
      cy.get('#modal h2').should('be.visible')
    })
  })
  
  it('The modal can be shown', () => {
    cy.visit("/test.html")
    
    cy.get('#open_button').then(($btn) => {
      $btn.click()
      cy.get('#modal h2').should('be.visible')
    })
  })
  
  it.only('Can have clicks get intercepted', () => {
    cy.visit("/test.html")

    cy.get('#open_button').click()
    cy.get('#menu h1').should('be.visible')

    cy.get('#close_button').click()
    cy.get('#menu h1').should('not.be.visible')
  })
  

  
})
