import { PrismaClient } from '@prisma/client'
import type { Category } from '@prisma/client'

const prisma = new PrismaClient()

export function findAllCategory(): Promise<Array<Category>> {
    return prisma.category.findMany()
}

export function createCategories(categories: Array<Category>){
    return prisma.category.createMany({ 
        data: categories
    })
}

// TODO: For testing, lock this up like before release
export function nukeAll(){
    prisma.category.deleteMany({})
}