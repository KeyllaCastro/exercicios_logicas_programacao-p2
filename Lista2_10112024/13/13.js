//Faça um Programa que leia um número e exiba o dia correspondente da semana.
//Exemplo, se o usuário digitar o número “1”, o programa tem que retornar “1-
//Domingo” e assim sucessivamente.
//Se o usuário digitar outro valor, o programa deverá retornar “valor inválido”

diaSemana = prompt(peaseFloat("Digite um número de 1 a 7"));

if (diaSemana === "1") {
    alert("1 - Domingo");
} else if (diaSemana === "2") {
    alert("2 - Segunda");
} else if (diaSemana === "3") {
    alert("3 - Terça");
} else if (diaSemana === "4") {
    alert("4 - Quarta");
} else if (diaSemana === "5") {
    alert("5 - Quinta");
} else if (diaSemana === "6") {
    alert("6 - Sexta");
} else if (diaSemana === "7") {
    alert("7 - Sábado");
} else {
    alert("Número inválido.");
}
