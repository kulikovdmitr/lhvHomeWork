class LeasingCalculatorPage {
    getBannerLocator() {
        return cy.get('#pirukas');
    }

    getAcceptBannerButtonLocator() {
        return cy.get('#acceptPirukas');
    }

    //I wish to apply for leasing (account_type-0 - private person, account_type-1 - legal person)
    getWishApplyForLeasingLocator() {
        return cy.get("#account_type-1");
    }

    //Type of leasing (financial lease = #kap_rent) , operation_lease = #kas_rent
    getFinancialLeaseRadiobuttonLocator() {
        return cy.get("kap_rent")
    }

    getOperationalLeaseRadiobuttonLocator() {
        return cy.get("kas_rent")
    }

    // Price of the vehicle (input) = #price
    getPriceOfVehicleLocator() {
        return cy.get('#price');
    }

    getVATcheckBoxLocator() {
        return cy.get('vat_included');
    }

    getDownpaymentPercentInputLocator() {
        return cy.get('#initial_percentage');
    }

    getDownpaymentEuroInputLocator() {
        return cy.get('#initial');
    }

    //Leasing period name="years", name ="months"
    getLeasingPeriodMonthSelectorLocator() {
        return cy.get('div#period div:nth-child(1) > div > select')
    }

    getLeasingPeriodYearsSelectorLocator() {
        return cy.get('div#period div:nth-child(1) > div > select')
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

    getMonthlyInstalmentAmountLocator () {
        return cy.get("div#monthly-payment div.payment");
    }

    //Button "Apply Here"
    getApplyButtonLocator () {
        return cy.get("div#monthly-payment div.payment");
    }

    //Toggle SampleMonthlyInsalment / MaximumMonthlyInstalment ([data-cy=submit])
    // getToggleMonthlyInstalment() {
    //     return cy.get("a[href^='#max-payment']");
    // }

}

export default LeasingCalculatorPage