//  -------------------------------------------  //

// Variables: Es un espacio de memoria reservado para almacenar un valor que puede cambiar a lo largo del tiempo.

// let primerNombre = "Esteban";
// let apellido;
// console.log(primerNombre);

// let miPrimerTrabajo = "Programador";

// let miActualTrabajo = "Profesor";

//  -------------------------------------------  //

/* 
Tipos de Datos: Primitivos

1- Number (numeros enteros o decimales) --> let edad = 23;
2- String ( Secuencia de caracteres) --> let nombre = "Esteban"
3- Boolean (Tipo de dato logico - true o false) --> let falso = false;
4- Undefined (Valor que toma una variable que no esta definida) --> let edad;
5- Null (representa intencionalmente un valor nulo o "vacio")
6- Symbol (define un valor unico y no se puede alterar)
7- BigInt (tipo de dato para representar valores muy grandes)

 */

// typeOf: palabra reservada para imprimir el tipo de dato de una variable

// let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);

// Escritura dinamica
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// Operadores Matematicos

// const actualidad = 2080;
// const edadEsteban = actualidad - 1999;
// const edadNarella = actualidad - 2000;
// console.log(edadEsteban, edadNarella);

// Operadores de Asignacion
// let x = 10 + 5; // 15;
// x += 10; // x = x + 10 = 25;
// x *= 4; // x = x * 4 = 100;
// x++; // x = x + 1;
// x--;
// x--;
// console.log(x);

// Operadores de comparacion
/* 
> : Mayor que
< : Menor que
>= : Mayor o igual
<= : Menor o igual
*/
// console.log(edadEsteban > edadNarella);
// console.log(edadEsteban >= 18);

// const mayorEdad = edadNarella >= 18;

// console.log(actualidad - 1999 > actualidad - 2018);

// const actualidad = 2080;
// const edadEsteban = actualidad - 1999;
// const edadNarella = actualidad - 2000;
// let x, y;

// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const edadPromedio = (edadEsteban + edadNarella) / 2;
// console.log(edadEsteban, edadNarella, edadPromedio);

// TEMPLATE LITERAL
// const primerNombre = "Esteban";
// const trabajo = "Profesor";
// const cumpleaños = 1999;
// const actualidad = 2023;

// const esteban =
//   "I'm " +
//   primerNombre +
//   ", a " +
//   (actualidad - cumpleaños) +
//   " year old " +
//   trabajo;

// console.log(esteban);

// const estebanDavid = `I'm ${primerNombre}, a ${
//   actualidad - cumpleaños
// } year old ${trabajo}`;
// console.log(estebanDavid);

// IF / ELSE

const edad = 12;
const mayorDeEdad = edad >= 18;

if (mayorDeEdad) {
  console.log("Esteban tiene permitido tramitas la licencia de conducir 🚗");
} else {
  const edadRestante = 18 - edad;
  console.log(
    `Esteban todavia es menor, debe esperar ${edadRestante} años mas 🥰`
  );
}

// CONVERSION DE TIPO Y COERCION DE TIPO:

// CONVERSION DE TIPO: convertimos explicitamente un tipo de dato a otro.
