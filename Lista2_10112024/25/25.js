resp = 0;
perg = [
    "Telefonou para a vítima? (sim ou não)",
    "Esteve no local do crime? (sim ou não)",
    "Mora perto da vítima? (sim ou não)",
    "Devia para a vítima? (sim ou não)",
    "Já trabalhou com a vítima? (sim ou não)"
];

for (var i = 0; i < perg; i++) {
    resp = prompt(perg[i]);
    if (resp == "sim") {
        resp++;
    }
}

if (resp == 2) {
    alert("Classificação: Suspeita.");
} else if (resp >= 3 && resp <= 4) {
    alert("Classificação: Cúmplice.");
} else if (resp == 5) {
    alert("Classificação: Assassino.");
} else {
    alert("Classificação: Inocente.");
}