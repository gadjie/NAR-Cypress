describe('Login screen test', function() {
  it('Checks the login screen', function() {

    cy.viewport('macbook-15')
    cy.visit('https://asia.nikkei.com')
    cy.contains('Visit our improved website').click()

//Navigate to Login page
    cy.contains('Login').click()

//Check text
    cy.contains('Welcome back')
    cy.contains('Log into your account to access articles and manage your Newsletter preferences')
    cy.contains('Email or ID')
    cy.contains('Password')
    cy.contains('Don\'t have an account? Subscribe today')
    cy.contains('Forgot password')

//Check links
    cy.contains('Subscribe today').should('have.attr','href','https://regist.asia.nikkei.com/member/register/')
    cy.contains('Forgot password?').should('have.attr','href','https://regist.asia.nikkei.com/member/password/')

//Check placeholder text
    cy.get('#form_login_id').should('have.attr','placeholder','name@example.com')

//Check button and text
    cy.get('#form_submit').should('contain', 'Sign In')

//Check error on Invalid username and password
    cy.get('#form_login_id').type('ab')
    cy.get('#form_password').type('ab')
    cy.get('#form_submit').click()
    cy.get('.form__error-message')
    .should('contain','We couldn\'t match the details you entered to an account.')

//Check login with valid
    cy.get('#form_login_id').type('<replace>').should('have.value','<replace>')    
    cy.get('#form_password').type('<replace>').should('have.value','<replace>')
    cy.get('#form_submit').click()
    cy.get('.btn').should('contain','Your Account')
    cy.get('.btn').should('contain','Log out')          
  })
})
