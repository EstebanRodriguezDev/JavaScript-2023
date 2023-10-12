"use strict";

// function registro() {
// console.log("Mi nombre es Esteban");
// }
// llamar , ejecutar , invocar una funcion.
// registro();

// function jugoFrutas(manzana, naranjas) {
//   console.log(manzana, naranjas);
//   const jugo = `Para un buen jugo mix se debe utilizar  ${manzana} Manzanas y ${naranjas} Naranjas`;
//   return jugo;
// }

// jugoFrutas(3, 5);

// const jugoMix = jugoFrutas(3, 5);
// console.log(jugoMix);

// Funcion declarada

// function calcularEdad(nacimiento) {
//   const actualidad = 2023;
//   const edad = actualidad - nacimiento;
//   return edad;
// }
// console.log(calcularEdad(1999));

// // Funcion Anonima

// const calcularEdad2 = function (nacimiento) {
//   const actualidad = 2023;
//   const edad = actualidad - nacimiento;
//   return edad;
// };

// const edad = calcularEdad2(1999);

// console.log(edad);

// ARROW FUNCTION - FUNCION DE FLECHA

// const jubilacion = (nacimiento, nombre) => {
//   const edad = 2023 - nacimiento;
//   const jubilado = 65 - edad;
//   return `${nombre} todavia te faltan ${jubilado} para poder jubilarte y disfrutar del resto de vida que te queda.`;
// };

// console.log(jubilacion(1999, "Esteban"));

// FUNCIONES QUE INVOCAN A OTRAS FUNCIONES

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const jugoFrutas = `Jugo de frutas ${applePieces} pedazos de manzana y ${orangesPieces} pedazos de naranja.`;
//   return jugoFrutas;
// }

// console.log(fruitProcessor(2, 4));
