import LeasingCalculatorPagePage from "../../support/PageObject/leasingCalculatorPage";
import CommonLocators from "../../support/PageObject/commonLocators";

/**
 * When you click on the "Apply" button, you go to the page for creating an application - https://www.lhv.ee/en/leasing/application
 */
describe('When you click on the "Apply" button, you go to the page for creating an application', function () {
        it('Creation application with default values in Sample mounthly instalment', function () {
            const leasingCalculatorPage = new LeasingCalculatorPagePage();
            cy.openCalcPageAndCloseBanner();

            //Act
            leasingCalculatorPage.getApplyButtonLocator().click()

            //Assert
            cy.url().should('eq', 'https://www.lhv.ee/en/leasing/application')
        });
})

describe('When you click on the "Apply" button, you go to the page for creating an application', function () {
    const commonLocators = new CommonLocators();
    it('Creation application with default values in Maximum monthly instalment', function () {
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();

        commonLocators.getMaximumMonthlyToggle().click()
        cy.url().should('eq', 'https://www.lhv.ee/en/leasing#max-payment')

        //Act
        leasingCalculatorPage.getApplyButtonLocator().click()

        //Assert
        cy.url().should('eq', 'https://www.lhv.ee/en/leasing/application')
    });
})