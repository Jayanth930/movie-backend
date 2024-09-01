import { Celebrity, Movie , PrismaClient } from "@prisma/client";
import { movieDTO, updatedMovieDTO } from "../types";
import { getDates } from "../utils";


const prisma = new PrismaClient()

const movie_per_page = 2
export async function addMovie(moviedata : movieDTO): Promise<Movie>{
    try {
        const movie = await prisma.movie.create({data : {
            ...moviedata , date : new Date(moviedata.date)
        }})
        return movie
    } catch (err) {
        throw err
    }
}


export async function getMovies({page , fromdate , enddate}: {page : number , fromdate : string , enddate: string}) : Promise<{ movies : Movie[] ,total_pages : number}> {
    try {
        const [start_date , end_date] = getDates({fromdate , enddate})
        const movies = await prisma.movie.findMany({
            where : {
                AND: [{ date : { gte : start_date}} , { date : { lte : end_date}}] 
            } ,
            orderBy : { date : "asc"} ,
            include : { reviews : true}
        })
    
        return { movies : movies.slice(movie_per_page*(page-1),movie_per_page*page), total_pages : Math.ceil(movies.length / movie_per_page) }
    } catch (err) {
        throw err
    }
}

// We can sclae the query , ryt now its just containing 2 people , we could add director , 
export async function getCastMovies({actor , actress}) : Promise<Movie[]> {
    try {
        const data  = [{ id : actor },{ id : actress}]
        const prismaQuery = data.map((cast)=>{
            return {
                cast : {
                    some : {
                        id  : cast.id
                    }
                }
            }
        })
        const movies = await prisma.movie.findMany({
            where : {
                AND : prismaQuery
            }
        })
        return movies
    } catch (err) {
        throw err
    }
}

export async function updateMovie(updatedMoviedata : updatedMovieDTO,movieId:string) : Promise<Movie> {
    try {
        const updatedMovie = await prisma.movie.update({
            where : { id : movieId} ,
            data : updatedMoviedata 
        })
        return updatedMovie
    } catch (err) {
        throw err
    }
}


export async function addCelebritiesToMovie(celebrities: string[] , movieId : string) : Promise<Movie> {
    try {
        const mapping = celebrities.map((celebrityId)=>{
            return { id : celebrityId}
        })
        const updatedMovie = await prisma.movie.update({
            where : { id : movieId} ,
            data : {
                cast : {
                    connect : mapping
                }
            },
            include : { cast : true }
        })
        return updatedMovie
    } catch (err) {
        throw err
    }
}