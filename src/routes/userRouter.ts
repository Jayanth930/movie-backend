import express , { Request , Response } from "express"
import { failureResponse , successResponse, userDTO } from "../types";
import { getExactError } from "../utils";
import { addUser } from "../db/userQuery";
const router = express.Router()

router.post('/',async (req : Request<{},{},userDTO>,res : Response<successResponse | failureResponse>)=>{
    try {
        const user = await addUser(req.body)
        const success = {
            responseCode : 1 ,
            message : "Successfully fetched user details",
            user
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







export default router;