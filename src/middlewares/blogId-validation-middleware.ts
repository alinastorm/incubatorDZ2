import { body } from 'express-validator';
import blogsService from '../domain/blogs-service.js';


export const blogIdValidationMiddleware = body('blogId')
    .custom(async (val) => {
        console.log('typeof val:', typeof val);
        const result = await blogsService.readOne(val)
        console.log('result:', !!result);
        if (!result) throw Error('bloger not finded')
    })
    .exists()
    .notEmpty({ ignore_whitespace: true })
    .isString()
    .isLength({ max: 1000 })
    // .withMessage({ message: 'wrong content', field: "content", code: 400 })
