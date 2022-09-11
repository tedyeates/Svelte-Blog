import { error, json } from '@sveltejs/kit'
import type { Prisma } from '@prisma/client'

type GetFunctionType<T>= () => Promise<T[]> | Prisma.Prisma__PostClient<T | null>

export async function getModel<T>(getFunction: GetFunctionType<T>, isTest=false) {
    let response = null

    try {
        response = await getFunction()
    }
    catch (err: any) {
        throw error(400, `Failed to get with error ${err.message}`)
    }

    const returnData = {status: 200, data: response}
    if(isTest) return json(returnData)
    return returnData
}