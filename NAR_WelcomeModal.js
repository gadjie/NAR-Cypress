describe('Welcome modal', function() {
  it('Checks the Welcome modal in full screen', function() {
    cy.viewport('macbook-15')    
    cy.clearCookies()
    cy.clearLocalStorage() 

    cy.visit('https://asia.nikkei.com')

//Check text
    cy.contains('Welcome to our new website')
    cy.contains('As well as being able to load content faster than ever before,')
    cy.contains('you\'ll now find it\'s much easier to find all the content you need')
    cy.contains('about the Asian business world.')

//Check image
   cy.get('.modal__image').should('have.attr','src','/bundles/betaoptin/images/NAR-new-product-shot-digital.png')


//Check button and text
    cy.get('.btn').should('contain','Visit our improved website')

//Check Close icon
    cy.get('.pw-widget__close-overlay')

//Click button
  cy.contains('Visit our improved website').click()

  })

    it('Checks the Welcome modal in mobile screen', function() {
    cy.viewport('iphone-6+')
    cy.clearCookies()
    cy.clearLocalStorage() 

    cy.visit('https://asia.nikkei.com')

//Check text
    cy.contains('Welcome to our new website')
    cy.contains('As well as being able to load content faster than ever before,')
    cy.contains('you\'ll now find it\'s much easier to find all the content you need')
    cy.contains('about the Asian business world.')

//Check image
   cy.get('.modal__image').should('have.attr','src','/bundles/betaoptin/images/NAR-new-product-shot-digital.png')


//Check button and text
    cy.get('.btn').should('contain','Visit our improved website')

//Check Close icon
    cy.get('.pw-widget__close-overlay')

//Click button
  cy.contains('Visit our improved website').click()

  })

  it('Checks the Welcome modal in ipad screen', function() {
    cy.viewport('ipad-2')
    cy.clearCookies()
    cy.clearLocalStorage() 
    cy.clearLocalStorage() 

    cy.visit('https://asia.nikkei.com')

//Check text
    cy.contains('Welcome to our new website')
    cy.contains('As well as being able to load content faster than ever before,')
    cy.contains('you\'ll now find it\'s much easier to find all the content you need')
    cy.contains('about the Asian business world.')

//Check image
   cy.get('.modal__image').should('have.attr','src','/bundles/betaoptin/images/NAR-new-product-shot-digital.png')


//Check button and text
    cy.get('.btn').should('contain','Visit our improved website')

//Check Close icon
    cy.get('.pw-widget__close-overlay')

//Click button
  cy.contains('Visit our improved website').click()

  })
})
