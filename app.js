import express from 'express';
import {shevento} from './controllers/eventcontrollers.js'
import {db} from './basedatos.js';
const router = express.Router();
const app = express();

app.use('/',router);

router.get('/', (req,res) => {
    res.send(" Hola mundo desde Heroku")
})

router.get('/eventos', shevento);

var PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Se conecto al servidor http://localhost:${PORT}`)
})