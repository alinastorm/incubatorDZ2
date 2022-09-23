import { Collection, MongoClient, Document } from 'mongodb'
import { IObject } from '../types/types';



// Connection URL
const url = process.env.mongoURI || 'mongodb://127.0.0.1:27017' || 'строковое подключение к кластеру в атласе'
const clientMongo = new MongoClient(url)
// Database Name
const dbName = process.env.mongoDbName || 'learning';
const database = clientMongo.db(dbName);
//Connect to Database
// const connect = await new Promise<any>

class DbMongo {

    async connect() {
        try {
            // connect the client
            await clientMongo.connect();
            console.log('Connected successfully to db-server');

            //connect db and verify connection    
            database.command({ ping: 1 })
            console.log(`Connected successfully to database: ${dbName}`);
        } catch (error) {
            console.log('mongo:', error);
            //close client when error
            await clientMongo.close()
        }
    }
    async readAll(collectionName: string, title?: string) {
        const collection: Collection<Document> = database.collection(collectionName)
        return title ?
            await collection.find({ $regex: title }).toArray() :
            await collection.find().toArray()
    }

    async readOne(collectionName: string, id: string) {
        const collection: Collection<Document> = database.collection(collectionName)
        const query = { id };
        const result = await collection.findOne(query)
        return result
    }

    async createOne(collectionName: string, element: Document) {
        const collection: Collection<Document> = database.collection(collectionName)
        const result = await collection.insertOne(element)
        return result.acknowledged
    }

    async updateOne(collectionName: string, id: string, data: any) {
        const collection: Collection<Document> = database.collection(collectionName)
        const result = collection.updateOne({ id }, { $set: data })
        return result
    }
    async replaceOne(collectionName: string, id: string, element: IObject) {
        const collection: Collection<Document> = database.collection(collectionName)
        const result = collection.replaceOne({ id }, element)
        return result
    }

    async deleteOne(collectionName: string, id: string) {
        const collection: Collection<Document> = database.collection(collectionName)
        const result = await collection.deleteOne({ id })
        return result.deletedCount === 1
    }

    async deleteAll(collectionName: string) {
        const collection: Collection<Document> = database.collection(collectionName)
        const result = await collection.deleteMany({})
        return result.acknowledged
    }
}

export default new DbMongo()