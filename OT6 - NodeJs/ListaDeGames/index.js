//carregando o express
const express = require("express");
//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

//Lista de Games

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "GTA 5", studio: "Rockstar", price: 150},
    {title: "Red Dead 2", studio: "Rockstar", price: 150},
    {title: "CyberPunk", studio: "CD Projekt Red", price: 250},
    {title: "Resident Evil 4", studio: "Capcom", price: 200}
]

app.listen(3080,() => {
    console.log("Servidor rodando!");
})

app.get("/", (req, res) => {
    res.json(games);
})
app.use(express.json());

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title: title, studio: studio, price: price }

    res.send("OK");
});

let newGame = { title, studio, price }
//para enviar estes dados para o array agora utilizamos o método push do JS
games.push(newGame);
