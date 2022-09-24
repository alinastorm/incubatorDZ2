import { Request, Response } from 'express';
import postsService from '../domain/posts-service.js';
import blogsService from '../domain/blogs-service.js';


class Controller {

    async deleteAll(req: Request, res: Response) {
     console.log('deleteAll ')
        await postsService.deleteAll()
        await blogsService.deleteAll()
        res.status(204).send('All data is deleted')
    }
}
export default new Controller()