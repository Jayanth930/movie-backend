import { Review , PrismaClient} from "@prisma/client";
import { ClientError , reviewDTO } from "../types"

const  prisma = new PrismaClient()

export async function addReview(reviewdata : reviewDTO ) : Promise<Review>{
    try {
        const user = await prisma.user.findUnique({ where : { id : reviewdata.userId }})
        const movie = await prisma.movie.findUnique({ where : { id : reviewdata.movieId}})
        if(!user || !movie){
            throw new ClientError("Please provide valid userId / movieId",400)
        }
        const review = await prisma.review.create({
            data : reviewdata
        })
        return review
    } catch (err) {
        throw err
    }
}


export async function upvoteReview({reviewId} : { reviewId : string}) : Promise<Review>{
    try {
        const updatedReview = await prisma.review.update({
            where : { id: reviewId },
            data : {
                upvote_count : { increment : 1}
            }
        })
        return updatedReview
    } catch (err) {
        throw err
    }
}