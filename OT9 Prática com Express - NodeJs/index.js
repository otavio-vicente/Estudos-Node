import Express from 'express';

const app = Express();

var carros = ['fiesta', 'saveiro', 'peugeot', 'palio', 'gol', 'celta'];

app.use(Express.urlencoded({ extended: true}));

app.get('/', (req, res)=>
    res.send("<h3>Rotas no Express<h3><p>Rota '/'")    
);

app.get('/sobre', (req, res)=>
    res.send("<h3>Rotas no Express<h3><p>Vamos aprender a utilizar Rotas com Express")
);

app.get('/users/:name', (req, res) =>{
    return res.json([name]);
});

app.post('/cars/', (req, res) =>{
let name = req.body.name;
carros[(carros.length)] = name;
return res.json([carros[(carros.length - 1)]]);
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});

app.listen(3000, ()=>
console.log('Servdor iniciado na porta 3000')
);

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; //deletar um item
    return res.json(carros[id]);
});