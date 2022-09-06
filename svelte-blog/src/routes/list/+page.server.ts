import { getCategoryById } from "$lib/prisma";
import type { PageServerLoad } from './$types'

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ url }) => {
    const category = url.searchParams.get('category')
    if(category !== null) 
        return await getCategoryById(parseInt(category))

    return null
}