import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";
import CommonLocators from "../../../support/PageObject/commonLocators";
const defaultValuesData = require('../../../fixtures/default_values.json');

/**
 * As part of these tests, we check the default display of calculator values.
 */
describe('Default values Sample monthly test', function() {
        beforeEach(() => {
            cy.openCalcPageAndCloseBanner();
        })
        it('Does not do much', function () {
            const leasingCalculatorPage = new LeasingCalculatorPagePage();

            //Assert
            cy.url().should('eq', 'https://www.lhv.ee/en/leasing#calculator')
            leasingCalculatorPage.getWishApplyForLeasingLocator(0).should(defaultValuesData.defaultWishApplyForLeasingPrivatePersonCondition)
            leasingCalculatorPage.getWishApplyForLeasingLocator(1).should(defaultValuesData.defaultWishApplyForLeasingLegalPersonCondition)
            leasingCalculatorPage.getFinancialLeaseRadiobuttonLocator().should(defaultValuesData.defaultTypeOfLeasingFinancialLease)
            leasingCalculatorPage.getOperationalLeaseRadiobuttonLocator().should(defaultValuesData.defaultTypeOfLeasingOperationalLease)
            leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', defaultValuesData.defaultPriceOfVehicleValue)
            leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', defaultValuesData.defaultDownPaymentPercentValue)
            leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', defaultValuesData.defaultDownPaymentEuroValue)
            leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', defaultValuesData.defaultInterestPercentValue)
            leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value', defaultValuesData.defaultResidualPercentValue)
            leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', defaultValuesData.defaultResidualEuroValue)
            leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text', defaultValuesData.defaultExpectationPriceValue)
        })
})

describe('Default values Maximum monthly test', function() {
    beforeEach(() => {
        cy.openCalcPageAndCloseBanner();
    })
    it('Values Maximum monthly test', function () {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        const commonLocators = new CommonLocators();

        //Act
        commonLocators.getMaximumMonthlyToggle().click()

        //Assert
        cy.url().should('eq', 'https://www.lhv.ee/en/leasing#max-payment')
        leasingCalculatorPage.getWishToApplyForLoanRadiobuttonLocator(0).should(defaultValuesData.defaultWishToApplyForLoanAloneCondition)
        leasingCalculatorPage.getWishToApplyForLoanRadiobuttonLocator(1).should(defaultValuesData.defaultWishToApplyForLoanWithApplicantCondition)
        leasingCalculatorPage.getMaterialStatusCheckBoxLocator().should(defaultValuesData.defaultMaterialStatusCondition)
        leasingCalculatorPage.getDependSelectLocator().should('have.value', defaultValuesData.defaultDependantsValue)
        leasingCalculatorPage.getNetIncomeInputLocator().should('have.value', defaultValuesData.defaultNetIncomeValue)
        leasingCalculatorPage.getMaxPaymentLimitOfferedLocator().should('have.text', defaultValuesData.defaultMaximumLimitOfferedValue)
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
        cy.url().should('eq', 'https://www.lhv.ee/en/leasing#calculator')
        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', defaultValuesData.defaultPriceOfVehicleValue)
        leasingCalculatorPage.getDownpaymentPercentInputLocator().should('have.value', defaultValuesData.defaultDownPaymentPercentValue)
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', defaultValuesData.defaultDownPaymentEuroValue)
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', defaultValuesData.defaultInterestPercentValue)
        leasingCalculatorPage.getResidualPercentsInputLocator().should('have.value',defaultValuesData.defaultResidualPercentValue)
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', defaultValuesData.defaultResidualEuroValue)
    })
})