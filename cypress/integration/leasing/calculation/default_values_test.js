import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";

/**
 * В рамках этих тестов мы проверяем отображение значений калькулятора по-умолчанию.
 */

describe('Default values test', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
    })
    it('Does not do much', function() {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '15 000')
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '1500')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','192.74')
    })
})

describe('Change default value and refresh page', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
    })
    it('Does not do much', function() {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();

        //Act
        cy.reload()

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '15 000')
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '1500')
    })
})