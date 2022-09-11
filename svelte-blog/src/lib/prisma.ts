import { Prisma, PrismaClient, type Author, type Post, type PrismaPromise } from '@prisma/client'
import type { Category } from '@prisma/client'
import { error } from '@sveltejs/kit'

const prisma = new PrismaClient()

export function findAllCategory(): Promise<Array<Category>> {
    return prisma.category.findMany()
}

export function createCategories(categories: Array<Category>): PrismaPromise<Prisma.BatchPayload>{
    return prisma.category.createMany({ 
        data: categories
    })
}

// TODO: For testing, lock this up like before release
export async function nukeAll(){
    await prisma.category.deleteMany({})
    await prisma.post.deleteMany({})
    await prisma.author.deleteMany({})
}

export function getCategoryById(id: number): Prisma.Prisma__CategoryClient<Category | null> {
    return prisma.category.findUnique({ 
        where: { 
            id: id
        },
     })
}

function getLastMonth(): Date {
    let lastMonth = new Date()
    lastMonth.setMonth(lastMonth.getMonth() - 1)
    return lastMonth
}

export function getMostPopularPost(): Prisma.Prisma__PostClient<Post | null> {
    return prisma.post.findFirst({
            where: {
                    date: {
                            gt: getLastMonth()
                    }
            },
            orderBy: {
                    views: 'desc'
            }
    })
}

export function getLatestPosts():  Promise<Array<Post>> {
    return prisma.post.findMany({ 
        orderBy: {
            date: 'desc'
        },
        take: 10
    })
}

function processPostData(post: Post): Post {
    if(!('date' in post)) throw error(401, `No date provided`)
    if(!('authorId' in post)) throw error(401, `No author provided`)

    return {
        ...post,
        date: new Date(post.date),
    }
}

export function createPosts(posts: Array<Post>): PrismaPromise<Prisma.BatchPayload> {
    return prisma.post.createMany({
        data: posts.map((post) => processPostData(post))
    })
}

export function createAuthors(authors: Array<Author>): Promise<Author[]> {
    return prisma.$transaction(
        authors.map((author) => prisma.author.upsert({ 
            where: { 
                name: author.name
            },
            update: {},
            create: {
                name: author.name
            }
        })),
    )
}