//Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

var num1 = parseFloat(prompt("Digite um valor: "));


if ( num1 > 0) {
    alert("O valor é positivo: "+ num1);
}else if (num1< 0){
    alert("O valor é negativo: "+ num1);
}