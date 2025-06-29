describe('Login using custom command', () => {
    it('Success Login', () => {
        cy.fixture('data_user.json').then((users) => {
            const datauser = users[0];
            cy.login(datauser.username, datauser.password);
            cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');            
        });  
    });
});