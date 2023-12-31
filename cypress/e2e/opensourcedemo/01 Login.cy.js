describe('Login', () => {
  it('Login positif', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title('OrangeHRM')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains('Dashboard')
  })

  it('login negative', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').contains('Invalid credentials')
  })
})