import { error, json } from '@sveltejs/kit'
import type { RequestEvent, } from '@sveltejs/kit'
import { findAllCategory } from '$lib/prisma'


/** @type {import('./$types').RequestHandler} */
export async function GET({ request }: RequestEvent) {
    let response = null

    try {
        response = await findAllCategory()
    }
    catch (err: any) {
        throw error(400, `Failed to obtain categories with error ${err.message}`)
    }

    return json({status: 200, data: response})
}