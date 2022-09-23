import { IObject } from "../types/types.js"


class DataService {
    constructor(private dbService: any) { }
    async readAll(collectionName: string) { return await this.dbService.readAll(collectionName) }
    async readOne(collectionName: string, id: string) { return await this.dbService.readOne(collectionName, id) }
    async createOne(collectionName: string, element: IObject) { return await this.dbService.createOne(collectionName, element) }
    async updateOne(collectionName: string, id: string, data: IObject) { return await this.dbService.updateOne(collectionName, id, data) }
    async replaceOne(collectionName: string, id: string, data: IObject) { return await this.dbService.replaceOne(collectionName, id, data) }
    async deleteOne(collectionName: string, id: string) { return await this.dbService.deleteOne(collectionName, id) }
    async deleteAll(collectionName: string) { return await this.dbService.deleteAll(collectionName) }
}

export default DataService