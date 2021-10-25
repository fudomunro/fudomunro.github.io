//const cypress = require('cypress')

describe('My First Test', () => {

    it('Can load the page', () => {
      cy.visit('/home.html')
      cy.title().should('eq', 'QA Web Automation Activity')
    })
  
    it('Check a menu item', () => {
      cy.visit('/home.html')
      
      // THIS SHOULD BE A BUTTON!!!
      cy.contains('div', 'open menu').click()
      
      cy.get('[data-nri-id="menu"] h5').first().should('be.visible').should('contain', 'Tomato Soup')
    })
  
    it('Can have a timing issue', () => {
      cy.visit('/home.html')
  
      cy.wait(2000)
      cy.contains('div', 'show contact').click()
      cy.contains('contact').should('be.visible')
  
      cy.get('#_541jkl_modal h1').then((heading) => {
        cy.log(heading.text())
      })
  
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  
    it('Can toggle the contact form', () => {
      cy.visit('/home.html')
  
      // THIS SHOULD BE A BUTTON!!
      cy.contains('div', 'show contact').click()
      cy.contains('Reserve a table').should('be.visible')
  
      // BUTTONZZ
      cy.contains('[data-nri-id="contact"] span', 'x').click()
      cy.contains('Reserve a table').should('not.be.visible')
    })
  
  
  
  })
  
