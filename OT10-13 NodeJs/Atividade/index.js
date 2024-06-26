//carregando o express
import express from 'express';
//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

//Lista de games

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30, id: 1},
    {title: "WOW", studio: "Blizzard", price: 120, id: 2},
    {title: "Valorant", studio: "Riot", price: 0, id: 3},
    {title: "COD", studio: "Activision", price: 200, id: 4},
    {title: "Minecraft", studio: "Mojang", price: 80, id: 5},
    {title: "Halo", studio: "Microsoft", price: 90, id: 6},
    {title: "CS2", studio: "Valve", price: 100, id: 7},
    {title: "Rocket League", studio: "Psyonix", price: 80, id: 8},
    {title: "Farcry", studio: "Ubisoft Montreal", price: 140, id: 9},
    {title: "FIFA", studio: "Electronic Arts", price: 200, id: 10},
]

const buscarJogoPorNome = (nomeJogo) => {
   // return jogo.nome.toLowerCase().includes(nome.toLowerCase());
    return games.filter(jogo => jogo.title.toLowerCase().includes(nomeJogo.toLowerCase()));
}

// app.get("/", (req, res) => {
//     res.send("Olá mundo!");
// })

app.get("/games", (req, res) => {
    const nomeJogo = req.query.busca;
    const resultado = nomeJogo ? buscarJogoPorNome(nomeJogo) : games;
    if(resultado.length > 0){
        res.json(resultado)
    } else {
        res.status(404).send({ "erro": "Nenhum jogo foi encontrado" });
    }
    //res.json(games);
})

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);
    
    res.send("OK");
})

//att um curso
app.get('/:idjogo', (req, res) =>{
    const idJOGO = parseInt(req.params.idjogo);
    let mensagemErro = '';
    let jogo;

    if(!(isNaN(idJOGO))) {
        jogo = games.find(u => u.id === idJOGO);
        if(!jogo) {
            mensagemErro = 'Jogos não encrontrado';
        }
    } else {
        mensagemErro = 'Busca inválida'
    }

    if(jogo) {
        res.json(jogo);  
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
    // const { index } = req.params;
    // let title = req.body.title;
    // let studio = req.body.studio;
    // let price = req.body.price;

    //     games[index] = {title, studio, price};

    // return res.json(games);
})

app.put('/novogame/:index', (req, res) =>{
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

        games[index] = {title, studio, price};

    return res.json(games);
})

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index,1);
    return res.json({message: "O Jogo foi deletado "});
})

app.listen(3080, () =>{
     console.log("Servidor rodando!");
 })

