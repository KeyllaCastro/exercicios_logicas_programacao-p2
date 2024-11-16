/*Faça um Programa para leitura de três notas parciais de um aluno. O programa deve
calcular a média alcançada por aluno e presentar:
a) A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva
média alcançada;
b) A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média
alcançada;
c) A mensagem "Aprovado com Distinção", se a média for igual a10.*/

nota1 = prompt(parseInt("Digite a primeira nota:"));
nota2 = prompt(parseInt("Digite a segunda nota:"));
nota3 = prompt(parseInt("Digite a terceira nota:"));

media = (nota1 + nota2 + nota3) / 3;

if (media == 10) {
    alert("Aprovado com Distinção! Sua média: " + media);
} else if (media >= 7) {
    alert("Aprovado! Sua média: " + media);
} else {
    alert("Reprovado! Sua média: " + media);
}
