// let totalExperiencia = 0;

// for (let i = 1; i <= 10; i++) {
//     console.log(`Batalha ${i}: Você ganhou 10 pontos de experiência!`);
//     totalExperiencia += 10;
// }

// console.log(`Total de experiência recebida: ${totalExperiencia} pontos.`);


// for (let i = 2; i <= 9; i++) {
//     console.log(`\nTabuada do ${i}:`);
    
//     for (let j = 1; j <= 10; j++) {
//         let resultado = i * j;
//         console.log(`${i} x ${j} = ${resultado}`);
//     }
// }

const readline = require('readline-sync');

let totalFolha = 0;
let funcionarios = 20;

for (let i = 1; i <= funcionarios; i++) {
    let codigo = readline.questionInt(`Informe o código do funcionário ${i}: `);
    let salario = readline.questionFloat(`Informe o salário do funcionário ${i}: R$ `);

    totalFolha += salario;
}

let mediaSalarial = totalFolha / funcionarios;

console.log(`\nTotal da folha de pagamento: R$ ${totalFolha.toFixed(2)}`);
console.log(`Média salarial da empresa: R$ ${mediaSalarial.toFixed(2)}`);