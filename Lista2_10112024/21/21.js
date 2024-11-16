/*21. Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário
a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As
notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o
máximo de 600 reais.
O programa não deve se preocupar com a quantidade de notas existentes na máquina.
• Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de
100, uma nota de 50, uma nota de 5 e uma nota de 1;
• Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de
100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.*/

valor = prompt(parseFloat("Digite o valor do saque (mín 10 e máx 600):"));

if (valor < 10 || valor > 600) {
    alert("Valor fora do intervalo permitido.");
} else {
    notas100 = parseInt(valor / 100);
    valor = valor - (notas100 * 100);
    notas50 = parseInt(valor / 50);
    valor = valor - (notas50 * 50);
    notas10 = parseInt(valor / 10);
    valor = valor - (notas10 * 10);
    notas5 = parseInt(valor / 5);
    valor = valor - (notas5 * 5);
    notas1 = valor;

    alert("Notas de 100: " + notas100);
    alert("Notas de 50: " + notas50);
    alert("Notas de 10: " + notas10);
    alert("Notas de 5: " + notas5);
    alert("Notas de 1: " + notas1);
}