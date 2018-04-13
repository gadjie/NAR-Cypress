describe('Header', function() {
  it('Checks the Header in full screen', function() {
    cy.viewport('macbook-15')   
    cy.visit('https://asia.nikkei.com')
    cy.contains('Visit our improved website').click()

//Check image
   cy.get('.svg-fallback__image').should('have.attr','src','https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fasia.nikkei.com%2Fassets%2Fimages%2Ficon--title.93360ba1.svg?format=png&source=nar-cms&tint=%23ffffff')


//Check buttons and text
    cy.get('.header__log-register').should('contain','Login')
    cy.get('.btn.btn--white-border').should('contain','Subscribe')    

//Check login button
    cy.contains('Login').click()
    cy.location('pathname').should('eq', '/login')
    cy.go('back')

//Check Subscribe button
    cy.contains('Subscribe').click()
    cy.go('back') 
  })
 })