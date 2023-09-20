import  express   from "express";
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes' 
import dotenv from 'dotenv'
dotenv.config()

import './src/database'

class App{
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.urlencoded({extend:true}))
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/", homeRoutes)
        this.app.use('/users', userRoutes)
    }
}

export default new App().app