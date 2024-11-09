// Faça um Programa que leia três números e mostre o maior deles

num1 = parseFloat(prompt("Digite um número: "));
num2 = parseFloat(prompt("Digite outro número: "));
num3 = parseFloat(prompt("Digite mais um número: "));
 
// Verifica qual é o numero maior número entre os 3
if (num1 >= num2 && num1 >= num3) {
    alert("O primeiro numero é o maior: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    alert("O segundo numero é o maior: " + num2);
} else {
    alert("O terceiro numero é o maior: " + num3);
}
