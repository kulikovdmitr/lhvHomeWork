class LeasingCalculatorPage {
    /**
     * Sample-monthly instalment locators
     */

    getBannerLocator() {
        return cy.get('#pirukas');
    }

    getAcceptBannerButtonLocator() {
        return cy.get('#acceptPirukas');
    }

    //I wish to apply for leasing (id = 0 - private person, id = 1 - legal person)
    getWishApplyForLeasingLocator(id) {
        return cy.get(`#account_type-${id}`);
    }

    //Type of leasing (financial lease = #kap_rent) , operation_lease = #kas_rent
    getFinancialLeaseRadiobuttonLocator() {
        return cy.get("#kap_rent")
    }

    getOperationalLeaseRadiobuttonLocator() {
        return cy.get("#kas_rent")
    }

    // Price of the vehicle (input) = #price
    getPriceOfVehicleLocator() {
        return cy.get('#price');
    }

    getVATcheckBoxLocator() {
        return cy.get('#vat_included');
    }

    getDownpaymentPercentInputLocator() {
        return cy.get('#initial_percentage');
    }

    getDownpaymentEuroInputLocator() {
        return cy.get('#initial');
    }

    //Leasing period name="years", name ="months"
    getLeasingPeriodYearsSelectorLocator() {
        return cy.get('div#period div:nth-child(1) > div > select')
    }

    getLeasingPeriodMonthSelectorLocator() {
        return cy.get('div#period div:nth-child(2) > div > select')
    }

    //Interest (percents) #interest_rate
    getInterestPercentsInputLocator() {
        return cy.get('#interest_rate');
    }

    //Residual value (percents) #reminder_percentage
    getResidualPercentsInputLocator() {
        return cy.get('#reminder_percentage');
    }

    //Residual value (euro)
    getResidualEuroInputLocator() {
        return cy.get('#reminder');
    }

    getMonthlyInstalmentAmountLocator() {
        return cy.get("div#monthly-payment div.payment");
    }

    getMaxPaymentLimitOfferedLocator() {
        return cy.get("div#max-payment div.payment")
    }

    //Button "Apply Here"
    getApplyButtonLocator() {
        return cy.get("div#monthly-payment a.btn.btn-dark");
    }

    /**
     * Maximum-monthly instalment locators
     */
    // 0 - WishToApplyAloneRadiobutton, 1 - WishToApplyWithCompliantRadiobutton
    getWishToApplyForLoanRadiobuttonLocator(id) {
        return cy.get(`#ownership-${id}`)
    }

    //
    getMaterialStatusCheckBoxLocator() {
        return cy.get("#marital-status-married")
    }

    //Dependands-select
    getDependSelectLocator() {
        return cy.get("#dependent-persons")
    }

    //NetIncomeInput
    getNetIncomeInputLocator() {
        return cy.get("#monthly-income")
    }
}

export default LeasingCalculatorPage