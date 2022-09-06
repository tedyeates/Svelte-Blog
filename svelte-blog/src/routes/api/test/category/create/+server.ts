import { error, json } from '@sveltejs/kit'
import type { RequestEvent, } from '@sveltejs/kit'
import { createCategories } from '$lib/prisma'


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: RequestEvent) {
    const body = await request.json()
    let response = null

    try {
        response = await createCategories(body.data)
    }
    catch (err: any) {
        throw error(401, `Failed to create categories with error ${err.message}`)
    }

    return json({status: 200, data: response})
}