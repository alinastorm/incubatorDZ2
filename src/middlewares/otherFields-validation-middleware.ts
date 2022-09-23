import { body } from 'express-validator';
import { FieldError } from '../types/types';

export const otherFieldsValidationMiddleware = body()
    .custom((value, { req }) => {
        const { title, author, availableResolutions, ...other } = value
        const otherKeys = Object.keys(other).length
        if (otherKeys) {
            // const error: FieldError = { message: 'unnecessary fields', field: JSON.stringify(other) }        
            throw new Error(JSON.stringify(other));
            // return res.status(400).json({ errors: errors.array() });
        }
        return true;
    })



