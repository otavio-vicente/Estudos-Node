var fs = require('fs');

fs.appendFile('novo.txt', 'Olá NodeJs! SENAI', function (err) {
    if (err) throw err;
    
    console.log('Arquivo Salvo');
})