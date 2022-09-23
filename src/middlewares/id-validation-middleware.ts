import { param } from 'express-validator';

export const idValidationMiddleware = param('id')
    .exists()
    .isNumeric()
    // .withMessage({ message: 'wrong id', field: "id", code: 400 })

