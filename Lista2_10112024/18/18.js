//Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
data = prompt("Digite uma data no formato dd/mm/aaaa:");

dia = parseInt(data[0] + data[1]);  
mes = parseInt(data[3] + data[4]); 
ano = parseInt(data[6] + data[7] + data[8] + data[9]);

if (mes >= 1 && mes <= 12) {
    diasMes;

    // Verifica o número de dias do mês
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        diasMes = 31;
    }
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        diasMes = 30;
    }
    else if (mes == 2) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            diasMes = 29;
        } else {
            diasMes = 28;
        }
    }

    if (dia >= 1 && dia <= diasMes) {
        alert("Data válida!");
    } else {
        alert("Dia inválido para o mês.");
    }
} else {
    alert("Mês inválido.");
}


