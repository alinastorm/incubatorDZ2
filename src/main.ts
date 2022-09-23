import dbMongoService from "./repository/db-mongo-service.js"
import httpService from "./services/http-service.js"




(async function () {
    await dbMongoService.connect()
    httpService.run()
})()