import { PrismaClient } from "@prisma/client"
import celebrityData from "../src/data/celebrity"
import userData from "../src/data/users"
import movieData from "../src/data/movies"
const prisma = new PrismaClient()

// Here we are adding some dummy data from celebraties 
async function seed(){

    // Adding celebraties data 
    try {
        const celebrityCount = await prisma.celebrity.createMany({
            data : celebrityData
        })
        console.log("Added celebraties")

        const userCount = await prisma.user.createMany({
            data : userData
        })
        console.log("userDetails Added")

        const movieCount = await prisma.movie.createMany({
            data : movieData
        })
        console.log("movie Details added")
    } catch (err) {
        process.exit(err.message)
    }
}


seed()
.then(()=>console.log("Dummy data added to database")).catch((err)=>console.error(err.message))
.finally(()=>{
    prisma.$disconnect()
})