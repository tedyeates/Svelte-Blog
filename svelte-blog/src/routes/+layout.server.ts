import { getModel } from "$lib/api/get";
import { findAllCategory } from "$lib/prisma";
import type { Category } from "@prisma/client";

/** @type {import('./$types').LayoutLoad} */
export function load() {
    return getModel<Category>(findAllCategory)
}