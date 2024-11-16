lado1 = parseFloat(prompt("Digite um lado do triângulo:"));
lado2 = parseFloat(prompt("Digite o outro lado do triângulo:"));
lado3 = parseFloat(prompt("Digite mais um lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

    if (lado1 === lado2 && lado2 === lado3) {
        alert("É equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("É isósceles.");
    } else {
        alert("É escaleno.");
    }
} else {
    alert("Os valores digitados não formam um triângulo.");
}
