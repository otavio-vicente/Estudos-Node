const divisao = function(a,b){
    if((a == 0)||(b == 0)){
        return 'Não é possível dividir por zero.';
    } else {
        return a / b;
    }
}
module.exports = divisao;