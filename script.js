//PUNTO 1
const suma = (sum1, sum2) => {
  console.log(`El resultado de ${sum1} + ${sum2} es igual a ${sum1 + sum2}`);
};
suma(2, 5);
suma(52, 96);
suma(6, 8);

//PUNTO 2
const resta = (rest1, rest2) => {
  console.log(
    `El resultado de la resta entre ${rest1} - ${rest2} es igual a ${
      rest1 - rest2
    }`
  );
};
resta(60, 10);
resta(6, 9);
resta(2, 7);

//PUNTO 3
const producto = (prod1, prod2) => {
  console.log(
    `El resultado del producto entre ${prod1} * ${prod2} es igual a ${
      prod1 * prod2
    }`
  );
};
producto(2, 5);
producto(9, 6);
producto(10, 80);

//PUNTO 4
const cociente = (div1, div2) => {
  console.log(
    `El resultado de dividir ${div1} / ${div2} es igual a ${div1 / div2}`
  );
};
cociente(2, 10);
cociente(60, 7);
cociente(5, 6.1);

//PUNTO 5
const frutas = ["anana", "frutilla", "durazno", "pera", "banana"];
const mostrarFrutas = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Fruta ${i}: ${array[i]}`);
  }
};
mostrarFrutas(frutas);

//PUNTO 6
const animales = [
  "león",
  "puma",
  "leopardo",
  "cebra",
  "jiraba",
  "hiena",
  "águila",
  "hipopótamo",
  "zorro",
  "gorila",
];
const mostrarAnimales = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Animal ${i}: ${array[i]}`);
  }
};
mostrarAnimales(animales);

//PUNTO 7
const calcular = (valor1, valor2, operacion) => {
  switch (operacion) {
    case "+":
      console.log(
        `El resultado de la suma entre ${valor1} y ${valor2} es igual a: ${
          valor1 + valor2
        }`
      );
      break;
    case "-":
      console.log(
        `El resultado de la resta entre ${valor1} y ${valor2} es igual a: ${
          valor1 - valor2
        }`
      );
      break;
    case "*":
      console.log(
        `El resultado del producto entre ${valor1} y ${valor2} es igual a: ${
          valor1 * valor2
        }`
      );
      break;
    case "/":
      console.log(
        `El resultado de la división entre ${valor1} y ${valor2} es igual a: ${
          valor1 / valor2
        }`
      );
      break;
    default:
      break;
  }
};
calcular(5, 5, "*");
calcular(2,9,"+");
calcular(9,78,"-");
calcular(9,3,"/");

//PUNTO 8


//PUNTO 9
var numeros;
for(let i; i<5; i++){
    numeros.push(prompt("Ingrese un número"));
}
const ascendente = (numeros) => {
    console.log(numeros.sort);
}