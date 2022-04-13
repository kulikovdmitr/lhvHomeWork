import LeasingCalculatorPagePage from "../../../support/PageObject/leasingCalculatorPage";

describe('Clear default priceOfVehicle test', function() {
    it('Does not do much', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();

        leasingCalculatorPage.getPriceOfVehicleLocator().should('have.value', '15 000')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500');
        leasingCalculatorPage.getInterestPercentsInputLocator().should('have.value', '4')
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '1500')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '1500')

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
    it('Does not do much', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.openCalcPageAndCloseBanner();

        //Act
        leasingCalculatorPage.getPriceOfVehicleLocator().clear()
        leasingCalculatorPage.getPriceOfVehicleLocator().type('2500')

        //Assert
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','32.12')
    })
})

describe('Change checkBox of VAT - does not change the calculation', function() {
    it('Does not do much', function() {
        //Arrange
        const leasingCalculatorPage = new LeasingCalculatorPagePage();
        cy.visit('https://www.lhv.ee/en/leasing#calculator');
        leasingCalculatorPage.getBannerLocator().should('be.visible');
        leasingCalculatorPage.getAcceptBannerButtonLocator().click()
        cy.get('#pirukas').should('not.be.visible')

        //Act
        leasingCalculatorPage.getPriceOfVehicleLocator().clear()
        leasingCalculatorPage.getPriceOfVehicleLocator().type('2500')

        //Assert
        leasingCalculatorPage.getDownpaymentEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getResidualEuroInputLocator().should('have.value', '250')
        leasingCalculatorPage.getMonthlyInstalmentAmountLocator().should('have.text','32.12')
    })
})