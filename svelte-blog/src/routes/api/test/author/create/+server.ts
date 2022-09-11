import type { RequestEvent, } from '@sveltejs/kit'
import { createAuthors } from '$lib/prisma'
import { createModel } from '$lib/api/create'
import type { Author, Prisma, PrismaPromise } from '@prisma/client'


/** @type {import('./$types').RequestHandler} */
export async function POST(requestEvent: RequestEvent) {
    return createModel<Author, Promise<Author[]>>(requestEvent, createAuthors, true)
}