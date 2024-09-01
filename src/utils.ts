import { Prisma } from "@prisma/client";
import { ClientError, failureResponse } from "./types";

type composite =  failureResponse & { status : number }


export function getExactError(err : Error | Prisma.PrismaClientKnownRequestError | Prisma.PrismaClientUnknownRequestError ) : composite{
    let message : string , status : number ;
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = 'Unique constraint failed on the field:' + err.meta.target;
        } else if (err.code === 'P2025') {
            message = 'Record not found.';
        } else if (err.code === 'P2014') {
            message = 'Foreign key constraint failed.';
        } else if (err.code === 'P2003') {
            message = 'Required field missing.';
        } else if (err.code === 'P1001') {
            message = 'Database connection error.';
        } else {
            message = 'An unknown error occurred:'
        }
        status = 401
    } else if(err instanceof Prisma.PrismaClientKnownRequestError || err instanceof ClientError){
        status = 401;
        message = err.message
    }else{
        status = 500 
        message = err.message
    }
    return {
        responseCode : 0 ,
        message,
        status
    }
}

export function getDates({fromdate , enddate} : { fromdate : string , enddate : string}): [Date,Date]{ // 2024/01/01
    const modified_enddate  = enddate + '    23:59:59:999'
    const start_date = new Date(new Date(fromdate).getTime())
    const end_date = new Date(new Date(modified_enddate).getTime())

    return [start_date,end_date]
}