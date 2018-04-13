describe('Footer test', function() {
  it('Checks the Footer on full screen', function() {

    cy.viewport('macbook-15')
    cy.visit('https://asia.nikkei.com')
    cy.contains('Visit our improved website').click()

//Check footer text
	cy.contains('Get Insights on Asia in your inbox')
	cy.get('.page-footer__title').should('contain','Connect With Us')
	cy.get('.page-footer__copyright').should('contain','Nikkei Inc. No reproduction without permission.')
 

//Check email sign-up placeholder text
    cy.get('.form__element--footer.form__text-field.form__text-field--email')
    .should('have.attr','placeholder','Enter your e-mail address...')


 /*Check social media links
 	cy.get('.share-tray.icon__container.icon__container--right').eq(0).should('contain','https://www.facebook.com/nikkeiasianreview')
 	cy.get('.icon--social.icon--twitter').should('have.attr','href','https://twitter.com/NAR')
 	cy.get('.icon--social.icon--instagram').should('have.attr','href', 'https://www.instagram.com/nikkeiasianreview/')
 	cy.get('.icon--social.icon--linkedin').should('have.attr','href', 'http://www.linkedin.com/company/nikkei-asian-review') 	
 	cy.get('.icon--social.icon--google-plus').should('have.attr','href', 'https://plus.google.com/105293795757249725929/posts')
 	cy.get('.icon--social.icon--youtube').should('have.attr','href', 'https://www.youtube.com/user/NikkeiAsia')
 	cy.get('.icon--social.icon--rss').should('have.attr','href', 'https://asia.nikkei.com/info/rss')
*/

//Check footer links
	cy.contains('About us').should('have.attr','href','/info/about')
	cy.contains('Contact us').should('have.attr','href','https://regist.asia.nikkei.com/contact/') 	 
	cy.contains('Sitemap').should('have.attr','href','https://regist.asia.nikkei.com/info/sitemap') 	 
	cy.contains('Help').should('have.attr','href','https://regist.asia.nikkei.com/info/help') 	 
	cy.contains('Terms of use').should('have.attr','href','https://regist.asia.nikkei.com/info/terms-of-use') 	 
	cy.contains('Copyright').should('have.attr','href','https://regist.asia.nikkei.com/info/copyright')
	cy.contains('Privacy & cookie policy').should('have.attr','href','https://regist.asia.nikkei.com/info/privacy') 	 
	cy.contains('Advertising').should('have.attr','href','https://regist.asia.nikkei.com/info/advertising') 	  	 	 	  			
  })
})
