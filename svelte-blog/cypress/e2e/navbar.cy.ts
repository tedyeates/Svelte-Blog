/// <reference types="cypress" />



describe('navigation allows user to filter posts', () => {

    context('test from homepage', () => {
        beforeEach(() => {
            cy.visit('')
        })
    
        it('all categories display in navbar', () => {
            cy.request(Cypress.env('categoryGetAllUrl')).then(response => {
                let categories = response.body.data
                // Check all categories in database are displayed
                cy.get('nav a[href*="?category"]').each((category, index) => {
                    expect(categories[index].name).to.contain(category.text().trim())
                })
            })
    
    
        })
    
        it('categories navigate to post list page', () => {
            
            let categoryLinkText: string
            cy.get('nav').find('a[href*="?category"]').first()
                .then(categoryLink => {
                    categoryLinkText = categoryLink.text()
                })
                .click()
    
            cy.get('main header h1').should(header => {
                expect(header.text()).to.equal(categoryLinkText)
            })

            cy.get('title').invoke('text').should('equal', 'Post List')
            cy.get('meta[name="description"]')
                .should(meta => {
                    expect(meta.attr('content')).to.contain(categoryLinkText)
                })
        })

        it('create button navigates to create page', () => {
            cy.get('nav').find('a[href="/create"]').first()
                .click()
                .url()
                .should('contain', '/create')

            cy.get('title').invoke('text').should('equal', 'Create Post')
            cy.get('meta[name="description"]').should('exist')
        })
    
        it('login button navigates to login page', () => {
            cy.get('nav').find('a[href="/login"]').first()
                .click()
                .url()
                .should('contain', '/login')

            cy.get('header').should('contain', 'Login to Your Account')

            cy.get('title').invoke('text').should('equal', 'Login')
            cy.get('meta[name="description"]').should('exist')
        })
    })

    context('tests from list page', () => {
        beforeEach(() => {
            cy.visit('list')
        })

        it('brand navigates to home page', () => {
            cy.get('nav').find('a[href="/"]').first()
                .click()
                .url()
                .should('equal', Cypress.config().baseUrl)

            cy.get('title').invoke('text').should('equal', 'Home Page')
            cy.get('meta[name="description"]').should('exist')
        })

    })

})