import type { RequestEvent, } from '@sveltejs/kit'
import { createPosts } from '$lib/prisma'
import { createModel } from '$lib/api/create'
import type { ApiPost, BatchCreateType } from '$lib/api/types'


/** @type {import('./$types').RequestHandler} */
export async function POST(requestEvent: RequestEvent) {
    return createModel<ApiPost, BatchCreateType>(requestEvent, createPosts, true)
}