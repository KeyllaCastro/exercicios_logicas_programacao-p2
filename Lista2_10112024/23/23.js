//. Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento (pesquise meu caro, dev).
num = prompt(parseFloat("Digite um número:"));

if (numero % 1 == 0) {
    alert("O número " + num + " é inteiro.");
} else {
    alert("O número " + num + " é decimal.");
}