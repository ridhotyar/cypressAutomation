describe('Login with data JSON', () => {
    
    //direct acces
    it.skip('login', () =>{
        cy.viewport('macbook-15')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title('OrangeHRM')

        cy.fixture('orangehrm').then ((data)=>{
            cy.get('input[name="username"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains(data.expected)
        })
    })

    let userdata

    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            userdata=data
        })
    })

    it('login', () =>{
        cy.viewport('macbook-15')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title('OrangeHRM')

        cy.get('input[name="username"]').type(userdata.username)
        cy.get('input[name="password"]').type(userdata.password)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

        cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains(userdata.expected)
    })
})