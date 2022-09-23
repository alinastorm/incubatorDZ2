import { BlogInputModel} from '../types/types.js';
import DataService from '../services/data-service.js';
import dbMongoService from '../repository/db-mongo-service.js';

const dataService = new DataService(dbMongoService)

const collection = 'blogs'

class Service {

    async readAll() {
        const result = await dataService.readAll(collection)
        return result
    }
    async createOne(body: BlogInputModel) {
        const result = await dataService.createOne(collection, body)
        return await dataService.readOne(collection, result.id)
    }
    async readOne(id: string) {
        const result = await dataService.readOne(collection, id)
        return result
    }
    async updateOne(id: string, data: any) {
        const result = await dataService.updateOne(collection, id, data)
        return result
    }
    async replaceOne(id: string, data: any) {
        const result = await dataService.replaceOne(collection, id, data)
        return result
    }
    async deleteOne(id: string) {
        const result = await dataService.deleteOne(collection, id)
        return result
    }
    async deleteAll() {
        const result = await dataService.deleteAll(collection)
        return result
    }
}
export default new Service()