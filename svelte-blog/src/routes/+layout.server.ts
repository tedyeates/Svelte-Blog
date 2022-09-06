import { findAllCategory } from "$lib/prisma";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    
    let response = null
    try {
        response = await findAllCategory()
        return {categories: response}
    }
    catch (err: any) {
        throw error(404, `Failed to retrieve categories with ${err.message}`)
    }
}