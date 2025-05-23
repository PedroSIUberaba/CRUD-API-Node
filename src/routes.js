import { Router } from "express";
import { createTable, insertPessoa, selectPessoa, selectPessoas,updatePessoa, deletePessoa} from './Controler/Pessoa.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "message": 'API Rodando!'
    })
});

//Routes Pessoa
router.get('/pessoas', selectPessoas)
router.get('/pessoa', selectPessoa)
router.post('/pessoa', insertPessoa)
router.put('/pessoa', updatePessoa)
router.delete('/pessoa', deletePessoa)



export default router;