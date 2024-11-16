/*19. Faça um Programa que leia um número inteiro menor que 1000 e imprima a
quantidade de centenas, dezenas e unidades dele.
Observando os termos no plural a colocação do "e", da vírgula entre outros.
Exemplo:
• 326 = 3 centenas, 2 dezenas e 6 unidades
• 12 = 1 dezena e 2 unidades testar com: 326, 300, 100, 320, 310,305, 301,
101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16
*/
num = parseInt(prompt("Digite um número inteiro menor que 1000:"));

centenas = parseInt(num / 100);
dezenas = parseInt((num % 100) / 10);
unidades = num % 10;
res= "";

// Verifica as centenas
if (centenas > 0) {
  res += centenas + " centena";
  if (centenas > 1) {
    res += "s";
  }
}

// Verifica as dezenas
if (dezenas > 0) {
  if (res) {
    res += ", ";
  }
  res += dezenas + " dezena";
  if (dezenas > 1) {
    res += "s";
  }
}

if (unidades > 0) {
  if (res) {
    res += " e ";
  }
  res += unidades + " unidade";
  if (unidades > 1) {
    res += "s";
  }
}

// Se o número for 0, imprime "0 unidades"
if (num === 0) {
  res = "0 unidades";
}

// Exibe o resultado com alert
alert(res);
