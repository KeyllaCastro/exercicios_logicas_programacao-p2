//Faça um programa que pergunte o preço de três produtos e informe qual produto você
//deve comprar, sabendo que a decisão é sempre pelo mais barato.

prod1 = parseFloat(prompt("Digite o preço do primeiro produto: "));
prod2 = parseFloat(prompt("Digite o preço do segundo produto: "));
prod3 = parseFloat(prompt("Digite o preço do terceiro produto: "));
 
// Verifica qual é o produto mais barato
if (prod1 <= prod2 && prod1 <= prod3) {
    alert("O primeiro produto é o mais barato: R$ " + prod1);
} else if (prod2 <= prod1 && prod2 <= prod3) {
    alert("O segundo produto é o mais barato: R$ " + prod2);
} else {
    alert("O terceiro produto é o mais barato: R$ " + prod3);
}