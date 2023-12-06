var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var array = []

array.push(lines[0].toFixed(4))

for (let index = 0; index < 100; index++) {
    let num = array[index]

    let numDivido = (num/2.0000)
    array.push(Number(numDivido).toFixed(4))
  
}

array.forEach((num,index)=>{

    if(num == 3858024656635.7813){
        console.log('N[5] = 3858024656635.7812');
    }else {
      console.log(`N[${index}] = ${num}`);
    }
 
})
