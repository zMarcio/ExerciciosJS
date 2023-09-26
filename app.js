import  express   from "express";

import dotenv from 'dotenv'
dotenv.config()

import './src/database'
import { resolve } from 'path'

import userRoutes from './src/routes/userRoutes' 
import homeRoutes from './src/routes/homeRoutes'
import tokenRoutes from './src/routes/tokenRoutes' 
import alunoRoutes from './src/routes/alunoRoutes'
import fotoRoutes from './src/routes/fotoRoutes'

class App{
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
    }

    routes(){
        this.app.use("/aluno", homeRoutes)
        this.app.use("/users/", userRoutes)
        this.app.use('/tokens/', tokenRoutes)
        this.app.use('/alunos/', alunoRoutes)
        this.app.use('/fotos/', fotoRoutes)
    }
}

export default new App().app