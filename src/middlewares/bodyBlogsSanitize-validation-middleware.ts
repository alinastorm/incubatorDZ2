import { body } from 'express-validator';

export const bodyBlogSanitizeValidationMiddleware = body([
    "title",
    "shortDescription",
    "content",
    "blogId"
])
// .withMessage({ message: 'wrong schema body Blog', field: "body", code: 400 })
