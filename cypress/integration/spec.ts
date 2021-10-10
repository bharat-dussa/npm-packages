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

Cypress.Commands.add("login", () => {
    const email = Cypress.env("email");
    const password = Cypress.env("password");
    Cypress.config("chromeWebSecurity", false);

    cy.visit("/sign-in");
    cy.get(".theme-connector-button-local").click();
    cy.get("#login").type(email);
    cy.get("#password").type(password);
    cy.get(".button").click();
});

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
