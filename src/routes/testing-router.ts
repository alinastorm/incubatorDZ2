import { Express } from 'express';
import testingController from "../controllers/testing-controller.js"

export default function setRoutes(app: Express) {
    //Testing
    app.delete('/testing/all-data',
        testingController.deleteAll,
    )
}


