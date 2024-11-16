//Faça um Programa que leia três números e mostre-os em ordem decrescente.

// Solicitação de três números
num1 = parseFloat(prompt("Digite o primeiro numero: "));
num2 = parseFloat(prompt("Digite o segundo numero: "));
num3 = parseFloat(prompt("Digite o terceiro numero: "));
 
// Mostrar os números em ordem decrescente : num1 maior
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        alert("Ordem decrescente: " + num1 + ", " + num2 + ", " + num3);
    } else {
        alert("Ordem decrescente: " + num1 + ", " + num3 + ", " + num2);
    }
//num2 maior
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        alert("Ordem decrescente: " + num2 + ", " + num1 + ", " + num3);
    } else {
        alert("Ordem decrescente: " + num2 + ", " + num3 + ", " + num1);
    }
//num3 maior
} else {
    if (num1 >= num2) {
        alert("Ordem decrescente: " + num3 + ", " + num1 + ", " + num2);
    } else {
        alert("Ordem decrescente: " + num3 + ", " + num2 + ", " + num1);
    }
}
