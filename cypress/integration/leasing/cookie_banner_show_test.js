import LeasingCalculatorPagePage from '../../support/PageObject/leasingCalculatorPage';

describe('Cookies Banner Test', function() {
    it('Does not do much', function() {
        //Arrange
        cy.visit('https://www.lhv.ee/en/leasing#calculator')

        //Act
        const leasingCalculatorPage=new LeasingCalculatorPagePage();
       //cy.get('#pirukas').should('be.visible')
        leasingCalculatorPage.getBannerLocator().should('be.visible')
        leasingCalculatorPage.getAcceptBannerButtonLocator().click()

        //Assert
        leasingCalculatorPage.getBannerLocator().should('not.be.visible')
    })
})