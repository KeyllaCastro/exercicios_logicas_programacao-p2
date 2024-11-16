/*Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual
operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma
frase que diga se o número é:
a) par ou ímpar;
b) positivo ou negativo;
c) inteiro ou decimal.*/

num1 = prompt("Digite o primeiro número:");
num2 = prompt("Digite o segundo número:");
ope = prompt("Escolha uma operação (+, -, *, /):");
resultado;

if (ope == "+") {
    resultado = num1 + num2;
} else if (ope == "-") {
    resultado = num1 - num2;
} else if (ope == "*") {
    resultado = num1 * num2;
} else if (ope == "/") {
    resultado = num1 / num2;
} else {
    alert("Operação inválida.");
}

alert("Resultado: " + resultado);