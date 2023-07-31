describe('login logout w/ session', () =>{
    beforeEach(() =>{
        cy.login('Admin', 'admin123')
    })

    it('login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains('Dashboard')
    })

    it('logout', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.logoutweb()
    })
})