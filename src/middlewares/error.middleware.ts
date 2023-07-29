import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../utils/errorResponse';

function handleErrorMiddleware(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    let error = { ...err };
    error.message = err.message;

    // Validation errors
    if (err.name === 'ValidationError') {
        let message = 'Validation error';
        Object.keys(err.errors).forEach((field) => {
            message = err.errors[field].message;
        });
        
        error = new ErrorResponse(message, 400);
    }

    // Custom error handling
    if (err.name === 'CastError') {
        const field = err.path;
        const message = `Invalid ${field}`;
        
        error = new ErrorResponse(message, 400);
    }
    
    // TypeError error handling
    if (err.name === 'TypeError') {
        const message = err.message;
        error = new ErrorResponse(message, 400);
    }

    // SyntaxError error handling
    if (err.name === 'SyntaxError') {
        const message = err.message;
        error = new ErrorResponse(message, 400);
    }

    // StrictPopulateError error handling
    if (err.name === 'StrictPopulateError') {
        const message = err.message;
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Internal server error"
    });
}

export default handleErrorMiddleware;