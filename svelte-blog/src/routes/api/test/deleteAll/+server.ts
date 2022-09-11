import { error, json } from '@sveltejs/kit'
import { nukeAll } from '$lib/prisma'

/** @type {import('./$types').RequestHandler} */
export async function DELETE() {
    let response = null
    try{
        response = await nukeAll()
    }
    catch (err: any) {
        throw error(401, `Failed to delete all data with ${err.message}`)
    }

    return json({status: 200, message: `successfully deleted all objects`})
}