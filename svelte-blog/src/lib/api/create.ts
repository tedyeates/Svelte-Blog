import { error, json } from '@sveltejs/kit'
import type { RequestEvent, } from '@sveltejs/kit'

type CreateFunctionType<T, U> = (data: Array<T>) => U

export async function createModel<T, U>({ request }: RequestEvent, createFunction: CreateFunctionType<T, U>, isTest=false) {
    const body = await request.json()
    let response = null

    try {
        response = await createFunction(body.data)
    }
    catch (err: any) {
        throw error(401, `Failed to create with error ${err.message}`)
    }

    const returnData = {status: 201, data: response}
    if(isTest) return json(returnData)
    return returnData
}