import express from 'express';
const app = express();

import router from './src/routes/routes.js'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);


app.listen(3300, ()=> {
    console.log('Servidor disponível na porta 3300')
    console.log('http://localhost:3300')
});