import { Celebrity , PrismaClient , Prisma } from "@prisma/client";
import { celebrityDTO } from "../types";
const prisma = new PrismaClient()

export async function addCelebrity(celebrity : celebrityDTO) : Promise<Celebrity> {
    try {
        const celeb = await prisma.celebrity.create({
            data : {
                ...celebrity , date_of_birth : new Date(celebrity.date_of_birth)
            }
        })
        return celeb
    } catch (err) {
        throw err
    }
}