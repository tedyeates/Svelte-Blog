/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', () => { 
    cy.request('POST', Cypress.env('apiLoginUrl'), {
        'username': Cypress.env('username'),
        'password': Cypress.env('password'),
    })
})

function dateToString(date: Date):string {
    return `${date.getFullYear}-${date.getMonth()}-${date.getDate()}`
} 

Cypress.Commands.add('createPosts', () => { 
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiTestBase')}/author/create`,
        body: {
            data: [
                {name: 'Ted Yeates'},
                {name: 'Jamie Slome'},
            ]
        }
    }).then(response => {
        let ted:number = -1, jamie:number = -1

        response.body.data.forEach((author) => {
            if(author.name == 'Ted Yeates')
                ted = author.id
            if(author.name == 'Jamie Slome')
                jamie = author.id
        })

        let today = new Date()
        let twoMonth = new Date()
        let lastWeek = new Date()
        let yesterday = new Date()

        twoMonth.setMonth(today.getMonth() - 2)
        lastWeek.setDate(today.getDate() - 7)
        yesterday.setDate(today.getDate() - 1)
        

        
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiTestBase')}/post/create`,
            body: {
                "data": [
                    {
                        "title": "hottest",
                        "body": "test",
                        "headImageURL": "image",
                        "date": dateToString(lastWeek),
                        "views": 100,
                        "authorId": ted
                    },
                    {
                        "title": "latest 2",
                        "body": "test",
                        "headImageURL": "image",
                        "date": dateToString(lastWeek),
                        "views": 20,
                        "authorId": ted
                    },
                    {
                        "title": "latest 1",
                        "body": "test",
                        "headImageURL": "image",
                        "date": dateToString(yesterday),
                        "views": 30,
                        "authorId": jamie
                    },
                    {
                        "title": "cold",
                        "body": "test",
                        "headImageURL": "image",
                        "date": dateToString(twoMonth),
                        "views": 200,
                        "authorId": jamie
                    },
                ]
            }
        })
    })
})

declare namespace Cypress {
    interface Chainable {
        login(): Chainable<void>
        createPosts(): Chainable<void>
    }
}