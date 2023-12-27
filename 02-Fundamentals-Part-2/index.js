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

// Estructura de datos - ARRAYS

// // Declaramos un arreglo con corchetes
// const amigos = ["Amigo1", "Amigo2", "Amigo3"];
// console.log(amigos);
// // Declaramos un array con la palabra reservada new Array
// const years = new Array(1991, 1995, 1999);

// // Buscamos en el arreglo la pocision indicada en este caso es el ultimo elemento que imprime
// console.log(amigos[2]);

// // Cambiamos el ultimo elemento y le asignamos nuevo valor.
// amigos[2] = "amigo4";
// console.log(amigos);

// const primerNombre = "Esteban";
// const esteban = [primerNombre, "Rodriguez", 2023 - 1999, "Estudiante", amigos];

// console.log(esteban);

// const amigos = ["Michael", "Steven", "Peter"];

// Metodos basicos en arreglos:

// Agrega elementos
// 1- push : agrega un elemento al final del arreglo.

// const amigos = ["Michael", "Steven", "Peter"];
// console.log(amigos);

// amigos.push("Alberto");
// console.log(amigos);

// // 2- unshift: Agrega un elemento al inicio del Array

// amigos.unshift("Juan");
// console.log(amigos);

// // Elimina elementos
// amigos.pop(); // Elimina el ultimo elemento
// console.log(amigos);

// amigos.shift(); // Elimina el primer elemento
// console.log(amigos);

// // Buscar un elemento en el array

// console.log(amigos.indexOf("Steve")); // En caso de no encontrar el elemento retorna -1.

// // Includes retorna un valor boleando dependiendo si encuentra o no el elemento indicado.
// console.log(amigos.includes("Steven")); // Retorna true
// console.log(amigos.includes("Steve")); // Retorna false

// Introduccion a Objetos: Propiedades (llaves) y valores. Las propiedades son nombre, apellido, edad y los valores son "Esteban", "Rodriguez".

const persona = {
  nombre: "Esteban",
  apellido: "Rodriguez",
  edad: 2023 - 1999,
  trabajo: "Electricista",
  amigos: ["Juan", "Alberto", "Rodrigo"],
};

console.log(persona);
console.log(persona.trabajo);
console.log(persona["trabajo"]);
