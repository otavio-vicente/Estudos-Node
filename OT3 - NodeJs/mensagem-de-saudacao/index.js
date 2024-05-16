//Instanciamos o Objeto Date...
let data = new Date();

//Utilizamos a instancia para recuperar a hora e os minutos...
let hora = data.getHours();
let min = data.getMinutes();

let saudacao;
//definimos a msg de saudação de acordo com a hora do dia

if(hora <= 11){
    saudacao = "Bom dia!";
} else if(hora <= 17) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

console.log('Olá! ' + saudacao);
console.log('Agora são ' + hora + 'horas e ' + min + 'minutos.');
