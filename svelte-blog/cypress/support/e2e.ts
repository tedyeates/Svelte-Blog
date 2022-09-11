// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
before(() => {
    // Wipe data
    // TODO: Make sure to do a check later for test database 
    cy.request('DELETE', `${Cypress.env('apiTestBase')}/deleteAll`)

    // Seed data
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiTestBase')}/category/create`,
        body: {
            data: [
                {name: "👨‍💻 Software"},
                {name: "🕷️ Cyber"},
                {name: "🤖 Backend"}
            ]
        }
    })

    
})