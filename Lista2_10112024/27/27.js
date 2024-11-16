/* Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                Até 5 Kg        Acima de 5 Kg
    Morango     R$ 2,50 por Kg  R$ 2,20 por Kg
    Maçã        R$ 1,80 por Kg  R$ 1,50 por Kg

    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$
25,00, receberá ainda um desconto de 10% sobre este total.
Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg)
de maças adquiridas e escreva o valor a ser pago pelo cliente.*/
kgMorangos = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
kgMacas = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));

precoMorangos;
if (kgMorangos <= 5) {
    precoMorangos = 2.50;
} else {
    precoMorangos = 2.20;
}

precoMacas;
if (kgMacas <= 5) {
    precoMacas = 1.80;
} else {
    precoMacas = 1.50;
}

valorMorangos = kgMorangos * precoMorangos;
valorMacas = kgMacas * precoMacas;
valorTotal = valorMorangos + valorMacas;

if (kgMorangos + kgMacas > 8 || valorTotal > 25.00) {
    valorTotal *= 0.90;
}


alert("O valor é R$ " + valorTotal);

