import { body } from 'express-validator';
import blogsService from '../domain/blogs-service.js';


export const blogIdValidationMiddleware = body('blogId')
    .custom(async (val, { req }) => {
        console.log('typeof val:', typeof val);
        const blog = await blogsService.readOne(val)
        if (!blog) throw Error('bloger not finded')
        req.body.blogName = blog.name
    })
    .exists()
    .notEmpty({ ignore_whitespace: true })
    .isString()
    .isLength({ max: 1000 })
    // .withMessage({ message: 'wrong content', field: "content", code: 400 })
