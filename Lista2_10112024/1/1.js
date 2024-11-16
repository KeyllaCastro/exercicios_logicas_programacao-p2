//Faça um Programa que peça dois números e imprima o maior deles.

var num1 = parseFloat(prompt("Digitr um numero: "));
var num2 = parseFloat(prompt("Digitr outro numero: "));

if (num1 > num2) {
    alert("O primeiro valor é o maior: "+ num1);
}else if (num1< num2){
    alert("O segundo valor é maior: "+ num2);
}else{
    alert("Os valores são iguais: "+ num1);
}
