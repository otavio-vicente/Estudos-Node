import express from 'express';
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome } from './servicos/servico.js';
//Imports das bibliotecas

const app = express(); //Chama o express

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if(resultado.length > 0){
        res.json(resultado)
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfsPorId(req.params.iduf);

    if(uf) {
        res.json(uf);
    } else if(isNaN(parseInt(req.param.iduf))) {
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(400).send({ "erro": "UF não encontrada" });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});