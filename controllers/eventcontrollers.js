import { evento } from '../models/eventos.js';
export const shevento = (req,res) => {
   
    evento
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error})); 
}
export default shevento;