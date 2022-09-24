import { Request, Response } from 'express';
import postsService from '../domain/posts-service.js';


class Controller {

    async readAll(req: Request, res: Response) {
        const result = await postsService.readAll()
        res.status(200).send(JSON.stringify(result))
    }
    async createOne(req: Request, res: Response) {
        const body = req.body
        const result = await postsService.createOne(body)
        res.status(201).send(result)
    }
    async readOne(req: Request, res: Response) {
        const id = req.params.id
        const result = await postsService.readOne(id)
        if (!result) {
            return res.status(404).send('Not Found')
        }
        res.status(200).send(result)
    }
    async updateOne(req: Request, res: Response) {
        const body = req.body
        const id = req.params.id
        const result = await postsService.readOne(id)
        if (!result) {
            return res.status(404).send('Not Found')
        }
        await postsService.updateOne(id, body)
        return res.sendStatus(204)
    }
    async replaceOne(req: Request, res: Response) {
        const body = req.body
        const id = req.params.id
        const result = await postsService.readOne(id)
        if (!result) {
            return res.status(404).send('Not Found')
        }
        await postsService.replaceOne(id, body)
        return res.sendStatus(204)
    }
    async deleteOne(req: Request, res: Response) {
        const body = req.body
        const id = req.params.id
        const result = await postsService.readOne(id)
        if (!result) {
            return res.status(404).send('Not Found')
        }
        await postsService.deleteOne(id)
        return res.sendStatus(204)
    }
    async deleteAll(req: Request, res: Response) {
     console.log('deleteAll posts')
        await postsService.deleteAll()
        res.status(204).send(JSON.stringify('All data is deleted'))
    }
}
export default new Controller()