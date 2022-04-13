import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";

describe('Default values test', function() {
    it('Does not do much', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '15 000')
        //leasingCalculatorPage.getVATcheckBoxLocator().should('have.value','checked') нужно подумать
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '1500')

        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','192.74')
    })
})

describe('Change default value and refresh page', function() {
    it('Does not do much', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();

        //Act
        leasingCalculatorPage.getPriceOfVehicleLocator().clear()
        leasingCalculatorPage.getResidualEuroInputLocator().clear()
        leasingCalculatorPage.getInterestPercentsInputLocator().clear()
        cy.reload()

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '15 000')
        //leasingCalculatorPage.getVATcheckBoxLocator().should('have.value','checked') нужно подумать
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '1500')

        //тут может выскачить баннер
    })
})