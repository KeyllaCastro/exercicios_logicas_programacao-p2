//Faça um Programa que leia três números e mostre o maior e o menor deles
num1 = parseFloat(prompt("Digite um número: "));
num2 = parseFloat(prompt("Digite outro número: "));
num3 = parseFloat(prompt("Digite mais um número: "));
 
// Maior número;
if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
} else {
    maior = num3;
}
 
// Menor número;
if (num1 <= num2 && num1 <= num3) {
    menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
} else {
    menor = num3;
}
 
// Resultado do maior e menor numero
alert("O maior número é: " + maior + ". E O menor número é: " + menor);