import { getModel } from "$lib/api/get";
import { getLatestPosts } from "$lib/prisma";
import type { Post } from "@prisma/client";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return getModel<Post>(getLatestPosts)
}