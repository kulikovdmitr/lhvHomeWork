class CommonLocators {
    getSampleMonthlyToggle() {
        return cy.get('a[href^="#monthly-payment"]');
    }

    getMaximumMonthlyToggle() {
        return cy.get('a[href^="#max-payment"]');
    }
}

export default CommonLocators