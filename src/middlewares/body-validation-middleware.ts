import { body } from 'express-validator';

export const bodyValidationMiddleware = body()
.notEmpty({ ignore_whitespace: true })
// .withMessage({ message: 'No body', field: "body", code: 400 })
