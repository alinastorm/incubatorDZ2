import express from 'express';
import bodyParser from 'body-parser'
import blogsRouting from '../routes/blogs-router.js';
import postsRouting from '../routes/posts-router.js';

class HttpService {
    httpServer = express()
    port: number | string = process.env.PORT || 9000
    run() {
        //routing
        blogsRouting(this.httpServer)
        postsRouting(this.httpServer)
        //midllewares
        this.httpServer.use(bodyParser.json())
        //starting server
        this.httpServer.listen(this.port, () => console.log(`http://localhost:${this.port}`))
    }
}

export default new HttpService()