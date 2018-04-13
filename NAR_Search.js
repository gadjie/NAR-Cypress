describe('Search functionality test', function() {
  it('Checks the search screen', function() {

    cy.viewport('macbook-15')
    cy.visit('https://asia.nikkei.com')
    cy.contains('Visit our improved website').click()

       
  })
})
