import type { RequestEvent, } from '@sveltejs/kit'
import { createCategories } from '$lib/prisma'
import { createModel } from '$lib/api/create'
import type { Category } from '@prisma/client'
import type { BatchCreateType } from '$lib/api/types'


/** @type {import('./$types').RequestHandler} */
export async function POST(requestEvent: RequestEvent) {
    return createModel<Category, BatchCreateType>(requestEvent, createCategories, true)
}