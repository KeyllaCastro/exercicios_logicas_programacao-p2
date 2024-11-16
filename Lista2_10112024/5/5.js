//Faça um programa para a leitura de duas notas parciais de um aluno.

nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));

//O programa deve calcular a média alcançada por aluno e apresentar:

media = (nota1 + nota2) / 2;

//• A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//• A mensagem "Reprovado", se a média for menor do que sete;
//• A mensagem "Aprovado com Distinção", se a média for igual a dez.

if (media === 10) {
    alert("Aprovado com Distinção");
} else if (media >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}