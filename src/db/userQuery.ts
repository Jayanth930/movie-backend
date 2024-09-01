import { PrismaClient, User } from "@prisma/client";
import { userDTO } from "../types";


const prisma = new PrismaClient()
export async function addUser(userdetils : userDTO): Promise<User>{
    try {
        const user = prisma.user.create({
            data : {
                ...userdetils , date_of_birth :  new Date(userdetils.date_of_birth)
            }
        })
        return  user
    } catch (err) {
        throw err
    }
}