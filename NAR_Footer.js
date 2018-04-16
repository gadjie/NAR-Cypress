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


 //Check social media links
 	cy.get('[href="https://www.facebook.com/nikkeiasianreview"] > .icon--social.icon--facebook > .svg-fallback__image').should('exist')
 	cy.get('[href="https://twitter.com/NAR"] > .icon--social.icon--twitter').should('exist')
 	cy.get('[href="https://www.instagram.com/nikkeiasianreview/"] > .icon--social.icon--instagram').should('exist')
 	cy.get('[href="http://www.linkedin.com/company/nikkei-asian-review"] > .icon--social.icon--linkedin').should('exist')
	cy.get('[href="https://plus.google.com/105293795757249725929/posts"] > .icon--social.icon--google-plus').should('exist')
	cy.get('[href="https://www.youtube.com/user/NikkeiAsia"] > .icon--social.icon--youtube > .svg-fallback__image').should('exist')
	cy.get('[href="https://asia.nikkei.com/info/rss"] > .icon--social.icon--rss > .svg-fallback__image ').should('exist')

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
