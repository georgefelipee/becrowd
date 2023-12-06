var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

var array = [];
let indexFinal = 19
for (let index = 0; index < 20; index++) {
   array.push(lines[index])
}

for (let index = 0; index < 20; index++) {

    let numInicio = lines[index]
    let numFinal = lines[indexFinal]
    array[index] = numFinal
    array[indexFinal] = numInicio
    indexFinal--
    

}

array.map((num,index) => {
    console.log(`N[${index}] = ${num}`);
})