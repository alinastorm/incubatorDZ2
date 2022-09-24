import dbMongoService from "./repository/db-mongo-service.js"
import httpService from "./services/httpServer-service.js"




(async function () {
    await dbMongoService.connect()
    httpService.run()
})()