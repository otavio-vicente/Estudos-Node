const express = require('express'); //Importa o framework Express para criar o servidor.
var bodyParser = require('body-parser') //Importa o body-parser para processar os corpos das requisições.
const path = require('path'); // Importa o módulo path do Node.js para trabalhar com caminhos de arquivos.
const app = express(); //Cria uma instância do aplicativo Express.

app.engine('html', require('ejs').renderFile); //Configura o motor de template EJS para renderizar arquivos HTML.
app.set('view engine', 'html'); //Define HTML como a extensão padrão para os templates.
app.use('/public', express.static(path.join(__dirname, 'public'))); //Serve arquivos estáticos (CSS, JS, imagens) da pasta public.
app.set('views', path.join(__dirname, '/views')); //Define o diretório views para armazenar os templates.

app.use(bodyParser.json());         //Permite que o app parseie corpos de requisições com JSON.
app.use(bodyParser.urlencoded({     //Permite que o app parseie corpos de requisições codificados como URL.
    extended: true
}))

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'] //Define uma lista de tarefas inicial.

app.get('/', (req, res) => {
    res.render('index', {tasksList: tasks}); // Define a rota GET para a página inicial. Renderiza o template index.html com a lista de tarefas.
})

app.post('/', (req, res) => {
    tasks.push(req.body.task);
    res.render('index', {tasksList: tasks}); //Define a rota POST para adicionar uma nova tarefa. Adiciona a tarefa enviada no corpo da requisição à lista tasks e renderiza novamente a página index com a lista atualizada.
})

app.get('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
        //Remove o item do array na posição do ID
    }
    res.redirect('/');
})

app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000') //Inicia o servidor na porta 5000 e exibe uma mensagem no console informando que o servidor está rodando.
})//