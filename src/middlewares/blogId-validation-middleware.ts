import { param } from 'express-validator';


export const blogIdValidationMiddleware = param('blogId')
    .exists()
    .isString()
    // .withMessage({ message: 'wrong blogId', field: "blogId", code: 400 })

