import express , { Request , Response} from "express"
import { successResponse , failureResponse, reviewDTO } from "../types"
import { getExactError } from "../utils"
import { addReview  , upvoteReview } from "../db/reviewQuery"

const router = express.Router()

type composite = successResponse | failureResponse

router.post('/',async (req:Request<{},{},reviewDTO> , res:Response<composite>)=>{
    try{
        const review = await addReview(req.body);
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfully added review",
            data : review
        }
        res.status(200).json(success)
    }catch(err){
        const failure = getExactError(err)
        res.status(failure.status).json({
            responseCode : 0 ,
            message: failure.message
        })
    }
})

// Upvote a review 
router.put('/upvote',async (req : Request<{},{},{},{ reviewId : string}>,res : Response<composite>)=>{
    try {
        const isSuccess = await upvoteReview(req.query)
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfully upvoted movie",
            data : isSuccess
        }
        res.status(200).json(success)
    } catch (err) {
        const failure = getExactError(err)
        res.status(failure.status).json({
            responseCode : 0 ,
            message : failure.message
        })
    }
})






export default router