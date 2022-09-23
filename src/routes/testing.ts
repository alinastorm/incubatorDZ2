import { Express } from 'express';
import postsController from "../controllers/posts-controller.js"
import blogsController from "../controllers/blogs-controller.js"

export default function routingService(app: Express) {
    //Testing
    app.delete('/testing/all-data',
        postsController.deleteAll,
        blogsController.deleteAll)
}


