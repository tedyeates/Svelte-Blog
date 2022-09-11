import { getMostPopularPost } from '$lib/prisma'
import type { Post } from '@prisma/client'
import { getModel } from '$lib/api/get'


/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return getModel<Post>(getMostPopularPost)
}