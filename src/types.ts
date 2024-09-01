import { Celebrity, Movie, Review, User } from "@prisma/client"

export interface successResponse {
    responseCode : 1 ,
    message : string ,
    data : any //Ideally this is not good
}


export interface failureResponse {
    responseCode : number ,
    message : string 
}


export type celebrityDTO = Omit<Celebrity,"date_of_birth"|"created_at"|"updated_at"> & {
    date_of_birth : string
}

export type movieDTO = Omit<Movie,"id" | "created_at" | "updated_at" | "awards" | "genre" | "date"> & {
    date : string 
}


export type userDTO = Omit<User,"id" | "created_at" | "updated_at" | "date_of_birth"> & {
    date_of_birth : string
} 

export type reviewDTO = Omit<Review,"id" | "created_at" | "updated_at" | "upvote_count">

export class ClientError extends Error {
    public status: number;
    constructor(message : string , status : number){
        super(message)
        this.status = status
    }
}

export type updatedMovieDTO = Partial<Movie>