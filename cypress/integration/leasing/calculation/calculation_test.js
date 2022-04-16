import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";
const testData = require('../../../fixtures/price_of_vehicle_for_sample.json');

/**
 * As part of these tests, we enter values from price_of_vehicle_for_sample.json and check
 * the correctness of the calculation of the final value by comparing with the expected value.
 */
describe('Calculation tests`', function () {
    testData.forEach((testData) => {
        it('Calculation test (gets its data from a fixture)', function () {
            const leasingCalculatorPage = new LeasingCalculatorPagePage();
            cy.openCalcPageAndCloseBanner();

            //Act
            leasingCalculatorPage.getPriceOfVehicleLocator().clear()
            leasingCalculatorPage.getPriceOfVehicleLocator().type(testData.price)

            leasingCalculatorPage.getDownpaymentPercentInputLocator().clear()
            leasingCalculatorPage.getDownpaymentPercentInputLocator().type(testData.downPaymentPercent)

            leasingCalculatorPage.getLeasingPeriodMonthSelectorLocator().select(testData.leasingPeriodMonth)
            leasingCalculatorPage.getLeasingPeriodYearsSelectorLocator().select(testData.leasingPeriodYears)

            leasingCalculatorPage.getInterestPercentsInputLocator().clear()
            leasingCalculatorPage.getInterestPercentsInputLocator().type(testData.interestPercent)

            //Assert
            leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', testData.price)
            leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', testData.downPaymentPercent)
            leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', testData.downPaymentEuro)
            leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', testData.interestPercent)
            leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value',testData.residualPercentValue)
            leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', testData.residualEuroValue)
            leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text',testData.expectationPrice)
        });
    });
})