import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";

describe('Change toggle monthly instalment', function() {
    //надо подумать как переключать
    it('Does not do much', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();

        //Act
        //leasingCalculatorPage.getToggleMonthlyInstalment().should('have.attr', '#max-payment').click()

        //Assert
    })
})