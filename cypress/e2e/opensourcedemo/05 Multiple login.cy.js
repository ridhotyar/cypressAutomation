describe('Multiple Login', ()=>{
    it('Data driven test', ()=>{
        
        cy.fixture("orangehrm2").then ((ecala)=>{
            
            ecala.forEach((userdata)=>{
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get('input[name="username"]').type(userdata.username)
                cy.get('input[name="password"]').type(userdata.password)
                cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()

                if(userdata.username=='Admin' && userdata.password=='admin123'){
                    cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains(userdata.expected)
                    
                    cy.wait(5000)
    
                    cy.get('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                    cy.get('h5.oxd-text.oxd-text--h5.orangehrm-login-title').contains("Login")
                }
                else{
                    cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').contains('Invalid credentials')
                }
            })
        })
    })
})