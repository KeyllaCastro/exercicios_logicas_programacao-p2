/*    O Hipermercado Tabajara está com uma promoção de carnes que é imperdível.
Confira:
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne
da promoção, porém não há limites para a quantidade de carne por cliente.
Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre
o total a compra.
             Até 5 Kg           Acima de 5 Kg
File Duplo  R$ 4,90 por Kg      R$ 5,80 por Kg
Alcatra     R$ 5,90 por Kg      R$ 6,80 por Kg
Picanha     R$ 6,90 por Kg      R$ 7,80 por Kg

Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e
gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne,
preço total, tipo de pagamento, valor do desconto e valor a pagar.*/

tipoCarne = prompt("Digite o tipo de carne (File Duplo, Alcatra, Picanha):");
quantidadeCarne = parseFloat(prompt("Digite a quantidade de carne (em Kg):"));
pagamentoCartao = prompt("A compra foi feita no cartão Tabajara? (sim/não):");

precoKg;

if (tipoCarne === "file duplo") {
    if (quantidadeCarne <= 5) {
        precoKg = 4.90;
    } else {
        precoKg = 5.80;
    }
} else if (tipoCarne === "alcatra") {
    if (quantidadeCarne <= 5) {
        precoKg = 5.90;
    } else {
        precoKg = 6.80;
    }
} else if (tipoCarne === "picanha") {
    if (quantidadeCarne <= 5) {
        precoKg = 6.90;
    } else {
        precoKg = 7.80;
    }
} else {
    alert("Tipo de carne inválido! Escolha entre File Duplo, Alcatra ou Picanha.");
}

valorTotal = quantidadeCarne * precoKg;

desconto = 0;
if (pagamentoCartao === "sim") {
    desconto = valorTotal * 0.05;
    valorTotal -= desconto;
}

alert("----- Cupom Fiscal -----\n" +
    "Tipo de Carne: " + tipoCarne + tipoCarne + "\n" +
    "Quantidade: " + quantidadeCarne + " Kg\n" +
    "Preço por Kg: R$ " + precoKg + "\n" +
    "Preço Total: R$ " + (quantidadeCarne * precoKg) + "\n" +
    "Tipo de Pagamento: " + (pagamentoCartao === "sim" ? "Cartão Tabajara" : "Outro") + "\n" +
    (desconto > 0 ? "Desconto (5%): R$ " + desconto+ "\n" : "") +
    "Valor a Pagar: R$ " + valorTotal
);
