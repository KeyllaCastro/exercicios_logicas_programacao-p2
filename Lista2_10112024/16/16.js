/*Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c.
O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao
usuário nas seguintes situações:
a. Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e
o programa não deve fazer pedir os demais valores.
• Informe ao usuário e encerre o programa;
b. Se o delta calculado for negativo, a equação não possui raízes reais.
• Informe ao usuário e encerre o programa;
c. Se o delta calculado for igual a zero a equação possui apenas uma raiz real
• informe-a ao usuário;
d. Se o delta for positivo, a equação possui duas raízes reais;
• informe-a ao usuário;*/

a = parseFloat(prompt("Digite o valor de a:"));
if (a === 0) {
    alert("A equação não é do segundo grau, assim, o valor de A não pode ser zero. ");
} else {
    b = parseFloat(prompt("Digite o valor de b:"));
    c = parseFloat(prompt("Digite o valor de c:"));

    delta = b * b - 4 * a * c;

if (delta < 0) {
    alert("Delta negativo, não possui raízes reais.");
} else if (delta === 0) {
    raiz = -b / (2 * a);
    alert("Possui uma única raiz real: " + raiz);
} else {
    raiz1 = (-b + (delta ** 0.5)) / (2 * a);
    raiz2 = (-b - (delta ** 0.5)) / (2 * a);
    alert("A equação possui duas raízes reais: " + raiz1 + " e " + raiz2);
}
}
