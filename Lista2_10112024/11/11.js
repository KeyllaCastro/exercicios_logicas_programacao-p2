//11. As Organizações Tabajara resolveram dar um aumento de salário aos seus 
//colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
//Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

salario = parseFloat(prompt("Qual o salário atual do colaborador? "));

/*e o reajuste segundo o seguinte critério, baseado no salário atual:

• Salários até R$ 280,00 (incluindo): aumento de 20%
• Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
• Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
• Salários de R$ 1500,00 em diante: aumento de 5% */

//Percentual de aumento, valor do aumento e novo salário.
percentual, valorAumento, novoSalario;

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

valorAumento = percentual * (percentual / 100);
novoSalario = salario + valorAumento;

/*Após o aumento ser realizado, informe na tela:
• Salário antes do reajuste
• Percentual de aumento aplicado
• Valor do aumento
• Novo salário, após o aumento*/

alert("Antes do reajuste: R$ " + salario);
alert("Percentual de aumento aplicado: " + percentual + "%");
alert("Valor do aumento: R$ " + valorAumento);
alert("Novo salário, após o aumento: R$ " + novoSalario);
