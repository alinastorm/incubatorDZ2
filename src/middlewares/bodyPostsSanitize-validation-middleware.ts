import { body } from 'express-validator';

export const bodyPostSanitizeValidationMiddleware = body([
    "title",
    "shortDescription",
    "content",
    "blogId"
])
// .withMessage({ message: 'wrong schema body Post', field: "body", code: 400 })
