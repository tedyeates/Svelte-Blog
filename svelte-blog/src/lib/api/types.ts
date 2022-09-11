import type { Post, Prisma, PrismaPromise } from "@prisma/client"

export type BatchCreateType = PrismaPromise<Prisma.BatchPayload>

export type ApiPost = Post & {
    author: string
}