import express from "express";
import { addMovie , getMovies , updateMovie  , addCelebritiesToMovie , getCastMovies } from "../db/movieQuery";
const router = express.Router()


//types 
import { Request , Response } from "express";
import { successResponse , failureResponse , movieDTO, updatedMovieDTO} from "../types";
import { getExactError } from "../utils";

type composite = successResponse | failureResponse
// Get al movies 
router.get('/', async (req: Request<{},{},{},{page : number , fromdate : string , enddate: string}>, res: Response<composite>) => {
    try {
        const movies = await getMovies(req.query); // Await the asynchronous function
        const success: successResponse = {
            responseCode: 1,
            message: "Successfully fetched movies",
            data: movies
        };
        res.status(200).json(success); // Send the success response
    } catch (err) {
        const failure = getExactError(err);
        res.status(failure.status).json({
            responseCode: 0,
            message: failure.message
        });
    }
});

// Get movie based on cast 
router.get('/cast',async (req : Request<{},{},{},{ actor : string , actress : string }>, res : Response<composite> )=>{
    try {
        const query = req.query
        const movies = await getCastMovies(query)
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfuly fetched movies for provided cast",
            data : movies
        }
        res.status(200).json(success)
    } catch (err) {
        const failure = getExactError(err);
        res.status(failure.status).json({
            responseCode: 0,
            message: failure.message
        });
    }
})
// Create a movie 
router.post('/',async (req : Request<{},{},movieDTO>,res:Response<successResponse | failureResponse>)=>{
    try {
        const movie = await addMovie(req.body)
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfully added moviedetails",
            data : movie
        }
        res.status(201).json(success)
    } catch (err) {
        const failure = getExactError(err) 
        res.status(failure.status).json({
            responseCode : 0 ,
            message : failure.message
        })
    }
})

router.put('/', async (req : Request<{},{},updatedMovieDTO,{movieId : string}>, res : Response<composite>)=>{
    try {
        const updatedMovie = await updateMovie(req.body,req.query.movieId)
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfully updated movie",
            data : updatedMovie
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

router.put('/celebrity',async (req : Request<{},{},{celebrities : string[]},{ movieId : string}>,res : Response<composite>)=>{
    try {
        const { celebrities } = req.body
        const { movieId } = req.query
        const updatedMovie = await addCelebritiesToMovie(celebrities,movieId)
        const success : successResponse = {
            responseCode : 1 ,
            message : "Successfully addedd celebrities for a Movie",
            data : updatedMovie
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