import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";

/**
 * В рамках этих тестов мы производим манипуляции со значениями через интерфейс и проверяем, что значения
 * зависимых параметров - изменились.
 */

describe('Clear default priceOfVehicle test', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();
    })

    it('Does not do much', function() {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();

        //Act
        leasingCalculatorPage.getPriceOfVehicleLocator().clear()

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '')
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '0')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '0')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','0.00')
    })
})

describe('Change priceOfVehicle test', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();
    })
    it('Does not do much', function() {
        //Act
        leasingCalculatorPage.getPriceOfVehicleLocator().clear()
        leasingCalculatorPage.getPriceOfVehicleLocator().type('2500')

        //Assert
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','32.12')
    })
})

describe('Change downPayment in percents - leads to change downPayment in euro test', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();
    })
    it('Does not do much', function() {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();

        //Act
        leasingCalculatorPage.getDownpaymentPercentInputLocator().clear()
        leasingCalculatorPage.getDownpaymentPercentInputLocator().type('15')

        //Assert
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value','2250')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','181.00')
    })
})

// describe('Maximum period selection - hides the selection of months', function() {
//     it('Does not do much', function() {
//         //Arrange
//         const leasingCalculatorPage = new LeasingCalculatorPagePage();
//         cy.openCalcPageAndCloseBanner();
//         cy.checkDefaultValuesBeforeTest();
//
//         //Act
//         leasingCalculatorPage.getDownpaymentPercentInputLocator().clear()
//         leasingCalculatorPage.getDownpaymentPercentInputLocator().type('15')
//
//         //Assert
//         leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value','2250')
//         leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','181.00')
//     })
// })