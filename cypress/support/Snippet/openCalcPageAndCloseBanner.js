import LeasingCalculatorPagePage from "../PageObject/leasingCalculatorPage";

const leasingCalculatorPage = new LeasingCalculatorPagePage();

Cypress.Commands.add("openCalcPageAndCloseBanner", () => {
    cy.visit('https://www.lhv.ee/en/leasing#calculator')
    leasingCalculatorPage.getBannerLocator().should('be.visible')
    leasingCalculatorPage.getAcceptBannerButtonLocator().click()
    cy.get('#pirukas').should('not.be.visible')
})