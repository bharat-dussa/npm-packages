/// <reference  types="cypress"/>

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Custom command to login.
         * @example cy.login()
         */
        login(): Cypress.Chainable<void>;

        /**
         * Custom command to save the Login details in Local Storage.
         * @example cy.login()
         */
        saveLocalStorage(): Cypress.Chainable<void>;

        /**
         * Custom command to restore the Local Storage to prevent the tests from re-login.
         * @example cy.login()
         */
        restoreLocalStorage(): Cypress.Chainable<void>;
    }
}
let LOCAL_STORAGE_KEY_AUTH: { [x: string]: any } = {};

Cypress.Commands.add("saveLocalStorage", () => {
    if (Object) {
        Object.keys(localStorage).forEach((key: string | number) => {
            LOCAL_STORAGE_KEY_AUTH[key] = localStorage[key];
        });
    }
});

Cypress.Commands.add("restoreLocalStorage", () => {
    if (Object) {
        Object.keys(localStorage).forEach((key: string | number) => {
            LOCAL_STORAGE_KEY_AUTH[key] = localStorage[key];
        });
    }
});
