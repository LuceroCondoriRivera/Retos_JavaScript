/* Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores 
iniciales y luego intercambia sus valores. Muestra los valores antes y 
después del intercambio en la consola. 
Para intercambiar valores puedes usar varios métodos(usando una 
variable temporal, aritmética o asignación simultanea), eres libre de 
elegir el que desees, eso si, investiga sobre el que usaras. */

let a = 4;
let b = 8;

console.log("Antes del intercambio: a =", a, ", b =", b);

[a, b] = [b, a];  // Intercambio usando desestructuración.

console.log("Después del intercambio: a =", a, ", b =", b);
