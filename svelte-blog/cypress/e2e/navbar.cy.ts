/// <reference types="cypress" />



describe('navigation allows user to filter posts', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('homeUrl'))
    })

    it('all categories display in navbar', async () => {
        const categories = cy.request(Cypress.env('categoryGetAllUrl'))
        // Check all categories in database are displayed
        cy.get('nav a[href*="?category"]').each((category, index) => {
            expect(categories[index].name).to.contain(category.text().trim())
        })

    })

    it('categories navigate to post list page', () => {
        cy.get('nav a[href*="?category"]').should((links) => {
            // Check all categories in database are displayed

            const category = links.first().text().trim()
            links.first().trigger('click')
            
            cy.get('header').should('contain', category)
            expect(cy.url()).to.contain('/list').contain(category)
        })

    })

    it('brand navigates to home page', () => {
        cy.visit('/list')
        cy.get('nav').find('a[href="/home"]').first().should(link => {
            link.trigger('click')
            expect(cy.url()).to.contain('/home')
        })
    })

    it('create button navigates to create page', () => {
        cy.get('nav').find('a[href="/create"]').first().should(link => {
            link.trigger('click')
            expect(cy.url()).to.contain('/create')
        })
    })

    it('login button navigates to login page', () => {
        cy.get('nav').find('a[href="/login"]').first().should(link => {
            link.trigger('click')
            expect(cy.url()).to.contain('/login')
            cy.get('header').should('contain', "Login to Your Account")
        })
    })
})