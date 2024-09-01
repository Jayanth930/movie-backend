"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExactError = getExactError;
var client_1 = require("@prisma/client");
function getExactError(err) {
    var message, status;
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = 'Unique constraint failed on the field:' + err.meta.target;
        }
        else if (err.code === 'P2025') {
            message = 'Record not found.';
        }
        else if (err.code === 'P2014') {
            message = 'Foreign key constraint failed.';
        }
        else if (err.code === 'P2003') {
            message = 'Required field missing.';
        }
        else if (err.code === 'P1001') {
            message = 'Database connection error.';
        }
        else {
            message = 'An unknown error occurred:';
        }
        status = 401;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        status = 401;
        message = err.message;
    }
    else {
        status = 500;
        message = err.message;
    }
    return {
        responseCode: 0,
        message: message,
        status: status
    };
}
