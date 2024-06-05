import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servico.js';
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
    const idUF = buscarUfPorId(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if(!(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF);
        if(!uf) {
            mensagemErro = 'UF não encrontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida'
    }

    if(uf) {
        res.json(uf);  
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});