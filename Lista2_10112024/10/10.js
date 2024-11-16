//Faça um Programa que pergunte em que turno você estuda. Peça para digitar “M-matutino” ou “V-Vespertino” ou “N- Noturno”.

turno = (prompt("Que turno que você estuda? M para matutino ou V para Vespertino ou N para Noturno: "))

//Imprima a mensagem "Bom Dia!" ou "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!" de acordo com a opção selecionada.

if (turno == "M" ) {
    alert("Bom Dia!");
} else if (turno == "V") {
    alert("Boa Tarde!");
} else if (turno == "N") {
    alert("Boa Noite!");
} else {
    alert("Valor Inválido!");
}
