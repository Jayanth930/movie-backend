
// modules
import express from "express";
import { addCelebrity } from "../db/celebrityQuery"
// types
import { Request , Response } from "express"
import { successResponse , failureResponse, celebrityDTO } from "../types"
import { getExactError } from "../utils";

const router = express.Router()
type responseType = successResponse | failureResponse;
// Add the celebraties from data folder
router.post('/',async (req:Request<{},{},celebrityDTO>, res : Response<responseType>)=>{
    try {
        const rowcount = await addCelebrity(req.body)
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfully added Celebrity/Celebraties",
            data : rowcount
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