import { body } from 'express-validator';


export const postIdValidationMiddleware = body('blogId')
    .exists()
    .isString()
// .custom((value, { req }) => {
//     console.log('value:', value);

//     return true
// })

// .withMessage({ message: 'wrong blogId', field: "blogId", code: 400 })

