/* Ejercicio 5: 
Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres. */

const prompt = require('prompt-sync')();

// Pedimos al usuario ingresar tres números por teblado
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Determinamos el mayor
let mayor = Math.max(num1, num2, num3);
console.log(`El mayor de los tres números es: ${mayor}`);
