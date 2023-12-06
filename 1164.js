var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

function verificaPerfeito(num){
    let soma = 0
    for (let index = 1; index <= num; index++) {
        soma+= index
        if(num==1) {
            console.log(`${num} nao perfeito`);
            break
        } 
        if (soma > num){
            console.log(`${num} nao eh perfeito`);
            break
        }
        if(soma == num){
            console.log(`${num} eh perfeito`);
            break
        } 
        
    }

}


for (let index = 1; index <= lines[0]; index++) {
    verificaPerfeito(lines[index])
    
}