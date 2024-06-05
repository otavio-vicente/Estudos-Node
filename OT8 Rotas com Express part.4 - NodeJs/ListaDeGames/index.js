//carregando o express
const express = require("express");
//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

//Lista de games

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "CS2", studio: "Valve", price: 100},
    {title: "Rocket League", studio: "Psyonix", price: 80},
    {title: "Farcry", studio: "Ubisoft Montreal", price: 140},
    {title: "FIFA", studio: "Electronic Arts", price: 200},
]

 
// app.get("/", (req, res) => {
//     res.send("Olá mundo!");
// })

app.get("/", (req, res) => {
    res.json(games);
})


app.use(express.json());

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

