var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var soma = 0
var tentativas = Number(lines[0])
var numeros = []
for (let i = 1; i <= tentativas; i++) {
    numeros.push(lines[i])
}

for (const value of numeros) {

    var x = Number(value.split(" ")[0])
    var y = Number(value.split(" ")[1])

    if(x==y){
        console.log(0);
    }

    for (let i = x; i < y; i++) {

        if(i % 2 != 0){
            soma = i + soma
        }

    }
    console.log(soma);
    soma = 0;
}
