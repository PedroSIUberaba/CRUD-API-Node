// import { openDb } from './configDB.js';
import { createTable, insertPessoa } from './Controler/Pessoa.js';

import express from 'express';

const app = express();
app.use(express.json());

createTable();

app.get('/', function (req, res) { 
    res.send('Hello World!');
});

app.post('/pessoas', function (req, res) {
    insertPessoa(req.body);
    res.json({
        "statusCode": 200,
        "message": 'Pessoa cadastrada com sucesso!'
    });
});

app.put('/pessoas', function (req, res) {
    if(req.body && !req.body.id) {
        res.json({
            "statusCode": 400,
            "message": 'ID não informado!'
        });
    }else{
        updatePessoa(req.body);
        res.json({
            "statusCode": 200,
            "message": 'Pessoa cadastrada com sucesso!'
        }); 
    }
});

app.listen(3000, ()=>console.log('API Rodando.'));
