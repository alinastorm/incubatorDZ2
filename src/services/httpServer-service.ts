import express from 'express';
import bodyParser from 'body-parser'
import blogsRouting from '../routes/blogs-router.js';
import postsRouting from '../routes/posts-router.js';
import testingRouting from '../routes/testing-router.js';

class HttpService {
    httpServer = express()
    
    port: number | string = process.env.PORT || 9000
    run() {
        //midllewares
        this.httpServer.use(bodyParser.json())
        //routing
        // this.httpServer.get('/testing/all-data', function (req, res) {
        //    console.log('req:',req.url);           
        //   });
        testingRouting(this.httpServer)
        blogsRouting(this.httpServer)
        postsRouting(this.httpServer)
        //starting server
        this.httpServer.listen(this.port, () => console.log(`http://localhost:${this.port}`))
    }
}

export default new HttpService()