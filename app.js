import express from 'express';
import taskRouter from './src/routes/taskRouter.js';

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/createTask', taskRouter)
        this.app.use('/', taskRouter)
    }
}

export default new App().app;