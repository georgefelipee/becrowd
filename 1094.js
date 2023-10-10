var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var somaCobaias = 0
var somaCoelhos = 0
var somaRatos = 0
var somaSapos = 0

for (let i = 0; i < lines.length ; i++) {
    
    var cobaias = Number(lines[i].split(" ")[0])
    somaCobaias += cobaias
    if(lines[i].split(" ")[1] == "C"){
        somaCoelhos += Number(lines[i].split(" ")[0].trim())
    }
    if(lines[i].split(" ")[1] == "R"){
        somaRatos += Number(lines[i].split(" ")[0].trim())
    }
    if(lines[i].split(" ")[1] == "S"){
        somaSapos += Number(lines[i].split(" ")[0].trim())
    }

}

console.log(`Total: ${somaCobaias} cobaias`);
console.log('Total de coelhos:',somaCoelhos);
console.log('Total de ratos:',somaRatos);
console.log('Total de sapos:',somaSapos);
//Porcentagem = (Valor Parcial / Valor Total) * 100

var percentualCoelhos = (somaCoelhos/somaCobaias)* 100 
var percentualRatos = (somaRatos/somaCobaias)* 100 
var percentualSapos = (somaSapos/somaCobaias)* 100 

console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`);