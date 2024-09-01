import { User } from "@prisma/client";

const users : Omit<User,"id" |"created_at" | "updated_at">[] = [
    {
        firstname: "Jayanth" , 
        lastname : "Kambhampati", 
        email : "jayanth@gmail.com",
        date_of_birth : new Date("2002/06/12")
    },
    {
        firstname: "Hemanth" , 
        lastname : "Kambhampati", 
        email : "hemath@gmail.com",
        date_of_birth : new Date("2000/08/23")
    },
    {
        firstname: "Gireesh" , 
        lastname : "Kambhampati", 
        email : "gireesh@gmail.com",
        date_of_birth : new Date("2002/04/01")
    },
    {
        firstname: "Avinash" , 
        lastname : "Kambhampati", 
        email : "avinash@gmail.com",
        date_of_birth : new Date("2004/06/15")
    }
]


export default users