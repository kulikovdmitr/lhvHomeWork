import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";

/**
 * As part of these tests, we manipulate values through the interface and check
 * that the values dependent parameters - changed.
 */
describe('Clear default priceOfVehicle test', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();
    })

    it('Clear default priceOfVehicle test', function() {
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
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
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

describe('Maximum period selection - hides the selection of months', function() {
    it('Choose the maximum value of years period', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();

        //Act
        leasingCalculatorPage.getLeasingPeriodMonthSelectorLocator().should('be.visible')
        leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().select('7')

        //Assert
        leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().should('be.visible')
        leasingCalculatorPage.getLeasingPeriodMonthSelectorLocator().should('not.be.visible')
    })
})

describe('If zero period is chosen, then the result is zero.', function() {
    it('Zero period by default', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();

        //Act
        leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().select('0')
        leasingCalculatorPage.getLeasingPeriodMonthSelectorLocator().select('0')

        //Assert
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','0.00')
    })
    it('If we change the zero value to another, then the value becomes non-zero', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();
        cy.checkDefaultValuesBeforeTest();

        leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().select('0')
        leasingCalculatorPage.getLeasingPeriodMonthSelectorLocator().select('0')

        //Act
        leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().select('1')

        //Assert
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('not.have.value','0.00')
    })
})


describe('Removing the VAT - checkbox for payment does not lead to a change in the calculations', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
    })
    it('Does not do much', function() {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();

        //Act
        leasingCalculatorPage.getVATcheckBoxLocator().uncheck({force: true})

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