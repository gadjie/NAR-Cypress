describe('Header', function() {
  it('Checks the Header in full screen', function() {
    cy.viewport('macbook-15')   
    cy.visit('https://asia.nikkei.com')
 //   cy.contains('Visit our improved website').click()

// Check section headers and links
    cy.get('.section__header').should('contain','TOP STORIES')

	cy.get('#features > .section__header > h2 > a')
	.should('contain','Editor\'s Picks')
	.should('have.attr','href','/Editor-s-picks/')

	cy.get('#opinions > .section__header > h2 > a')
    .should('contain','OPINION')
    .should('have.attr','href','/Opinion')

	cy.get('.asia300-block__title > a')
    .should('have.attr','href','/Asia300')


	cy.get('#topics > .section__header > h2')
	.should('contain','Topics')


	cy.get('.section__main > :nth-child(1) > h2 > :nth-child(1)')
	.should('contain','NEWS BY LOCATION')
	.should('have.attr','href','https://asia.nikkei.com/Location')


	cy.get('.card--topic > .card__title > a')
	.should('contain','IN THIS WEEK’S MAGAZINE')
	.should('have.attr','href','https://asia.nikkei.com/Print-Edition')


// Check market data is displayed
/*	cy.get('.currency-row').eq(0).should('contain','Nikkei Asia300')
	cy.get('.currency-row__data.currency-row__data--name').eq(0).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(0).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(0).should('exist')

	cy.get('.currency-row').eq(1).should('contain','Nikkei 225')
	cy.get('.currency-row__data.currency-row__data--name').eq(1).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(1).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(1).should('exist')

	cy.get('.currency-row').eq(2).should('contain','Shanghai Comp.')
	cy.get('.currency-row__data.currency-row__data--name').eq(2).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(2).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(2).should('exist')

	cy.get('.currency-row').eq(3).should('contain','Hang Seng')
	cy.get('.currency-row__data.currency-row__data--name').eq(3).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(3).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(3).should('exist')

	cy.get('.currency-row').eq(4).should('contain','Singapore STI')
	cy.get('.currency-row__data.currency-row__data--name').eq(4).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(4).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(4).should('exist')

	cy.get('.currency-row').eq(5).should('contain','Sensex')
	cy.get('.currency-row__data.currency-row__data--name').eq(5).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(5).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(5).should('exist')

	cy.get('.currency-row').eq(6).should('contain','Dow Jones Ind.')
	cy.get('.currency-row__data.currency-row__data--name').eq(6).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(6).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(6).should('exist')

	cy.get('.currency-row').eq(7).should('contain','USD/JPY')
	cy.get('.currency-row__data.currency-row__data--name').eq(7).should('greaterThan','0')
	cy.get('.currency-row__data.currency-row__data--difference').eq(7).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(7).should('exist')

	cy.get('.currency-row').eq(8).should('contain','USD/CNY')
	cy.get('.currency-row__data.currency-row__data--name').eq(8).should('greaterThan','1000')
	cy.get('.currency-row__data.currency-row__data--difference').eq(8).should('exist')
	cy.get('.currency-row__data.currency-row__data--difference-pct').eq(8).should('exist')

*/
    })
})