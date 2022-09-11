import { findAllCategory } from '$lib/prisma'
import { getModel } from '$lib/api/get'
import type { Category } from '@prisma/client'


/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return getModel<Category>(findAllCategory, true)
}