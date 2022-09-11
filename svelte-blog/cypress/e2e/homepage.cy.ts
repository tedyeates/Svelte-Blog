describe('home page displays a summary of posts including latest and hottest', () => { 
    beforeEach(() => {
        cy.createPosts()
        cy.visit('')
    })


    it('check most popular post is displayed as highlighted article', () => {
        cy.get('section[aria-label="hottest posts"').as('hottestPost')
            
        cy.get('@hottestPost').contains('header')
            .should('contain', 'hottest')
            .should('contain', '🔥')

        cy.get('@hottestPost').contains('footer')
            .should('contain', 'Ted Yeates')
            .should('contain', '100')
            .should('contain', 'last week')
    })


    it('check latest posts are displayed as highlighted article', () => {
        cy.get('section[aria-label="latest posts"').as('latestPost')
            
        cy.get('@latestPost').contains('header')
            .should(headers => {
                expect(headers.first()).to.contain('latest 1')
                expect(headers.first()).to.contain('⏰')

                expect(headers.eq(1)).to.contain('latest 2')
                expect(headers.eq(1)).to.contain('⏰')
            })

        cy.get('@latestPost').contains('footer')
            .should(footers => {
                expect(footers.first()).to.contain('Jamie Slome')
                expect(footers.first()).to.contain('30')
                expect(footers.first()).to.contain('yesterday')

                expect(footers.eq(1)).to.contain('Ted Yeates')
                expect(footers.eq(1)).to.contain('20')
                expect(footers.eq(1)).to.contain('last week')
            })
    })
})