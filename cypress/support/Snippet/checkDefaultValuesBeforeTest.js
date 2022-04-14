import LeasingCalculatorPagePage from "../PageObject/leasingCalculatorPage";

const leasingCalculatorPage = new LeasingCalculatorPagePage();

Cypress.Commands.add("checkDefaultValuesBeforeTest", () => {
    leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '15 000')
    leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500');
    leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
    leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500')
    leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '1500')
})