import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";
import CommonLocators from "../../../support/PageObject/commonLocators";
const defaultValuesData = require('../../../fixtures/default_values.json');

/**
 * Change toggle from Sample monthly -> Maximum Monthly
 */
describe('Change toggle monthly instalment and return back', function() {
    it('Use default values', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        const commonLocators = new CommonLocators();
        cy.openCalcPageAndCloseBanner();

        //Act
        commonLocators.getMaximumMonthlyToggle().click()

        cy.url().should('eq', 'https://www.lhv.ee/en/leasing#max-payment')
        leasingCalculatorPage.getDependSelectLocator().should('be.visible')
        leasingCalculatorPage.getNetIncomeInputLocator().should('be.visible')

        leasingCalculatorPage.getPriceOfVehicleLocator().should('not.be.visible')
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('not.be.visible')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('not.be.visible')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('not.be.visible')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('not.be.visible')
        leasingCalculatorPage.getResidualEuroInputLocator().should('not.be.visible')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('not.be.visible')

        //Return back
        commonLocators.getSampleMonthlyToggle().click()

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', defaultValuesData.defaultPriceOfVehicleValue)
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', defaultValuesData.defaultDownPaymentPercentValue)
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', defaultValuesData.defaultDownPaymentEuroValue)
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', defaultValuesData.defaultInterestPercentValue)
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value', defaultValuesData.defaultResidualPercentValue)
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', defaultValuesData.defaultResidualEuroValue)
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text', defaultValuesData.defaultExpectationPriceValue)
    })
})

describe('Change values and change toggle monthly instalment and return back', function() {
    it('Change data in Simple Monthly, then change toggle and return back', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        const commonLocators = new CommonLocators();
        cy.openCalcPageAndCloseBanner();

        leasingCalculatorPage.getPriceOfVehicleLocator().clear()
        leasingCalculatorPage.getPriceOfVehicleLocator().type('2500')

        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '2500')
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','32.12')

        //Act
        commonLocators.getMaximumMonthlyToggle().click()
        cy.url().should('eq', 'https://www.lhv.ee/en/leasing#max-payment')

        //Return back
        commonLocators.getSampleMonthlyToggle().click()

        //Assert
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '2500')
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', '10')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value','10')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','32.12')
    })
})