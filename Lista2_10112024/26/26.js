litros = parseFloat(prompt("Digite a quantidade de litros:"));
tipoCombustivel = prompt("Digite o tipo de combustível (A para Álcool, G para Gasolina):");

precoAlcool = 3.90;
precoGasolina = 5.50;
desconto = 0;
precoFinal = 0;

if (tipoCombustivel === 'A') {
    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
    precoFinal = litros * precoAlcool * (1 - desconto);
}
else if (tipoCombustivel === 'G') {
    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
    precoFinal = litros * precoGasolina * (1 - desconto);
}

alert("O valor a ser pago é R$ " + precoFinal);
