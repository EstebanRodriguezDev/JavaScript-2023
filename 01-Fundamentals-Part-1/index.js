//  -------------------------------------------  //

// Variables: Es un espacio de memoria reservado para almacenar un valor que puede cambiar a lo largo del tiempo.

let primerNombre = "Esteban";
let apellido;
// console.log(primerNombre);

let miPrimerTrabajo = "Programador";

let miActualTrabajo = "Profesor";

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

let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);

// Escritura dinamica
javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// Operadores Matematicos

const actualidad = 2080;
const edadEsteban = actualidad - 1999;
const edadNarella = actualidad - 2000;
console.log(edadEsteban, edadNarella);

// Operadores de Asignacion
let x = 10 + 5; // 15;
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Operadores de comparacion
/* 
> : Mayor que
< : Menor que
>= : Mayor o igual
<= : Menor o igual
*/
console.log(edadEsteban > edadNarella);
console.log(edadEsteban >= 18);

const mayorEdad = edadNarella >= 18;

console.log(actualidad - 1999 > actualidad - 2018);
