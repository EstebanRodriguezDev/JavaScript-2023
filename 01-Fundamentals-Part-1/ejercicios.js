/*
1- Mark y John estan tratando de comparar su IMC (Indice de masa corporal), que se calcula mediante la formula: 
  IMC = masa / (altura * altura) (masa en kg y altura en metros)

El objetivo es escribir un codigo para ayudarlos:

-Almacene la masa y la altura de Mark y John en variables llamadas massMark, heightMark, massJohn y heightJohn.

-Calcule el IMC de ambos usando la fórmula y almacene los resultados en dos variables llamadas IMCMark y IMCJohn.

-Registre el valor de IMCMark y IMCJohn en la consola.

-cree una variable booleana markHigherIMC que contenga información sobre si Mark tiene un IMC más alto que John. Regístrelo en la consola también

-DATOS DE PRUEBA: Marks pesa 78 kg y mide 1,69 m de altura. Juan pesa 92 kg y mide 1,95 m.
*/

const masaMark = 78;
const alturaMark = 1.69;
const masaJohn = 92;
const alturaJohn = 1.95;

let IMCMark = masaMark / (alturaMark * alturaMark);
let IMCJohn = masaJohn / (alturaJohn * alturaJohn);

console.log(IMCMark, IMCJohn);

let markHigherIMC = IMCMark < IMCJohn;

console.log(markHigherIMC);
