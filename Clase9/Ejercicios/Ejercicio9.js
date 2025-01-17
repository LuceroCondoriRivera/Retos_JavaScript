/* Ejercicio 9:  
Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI.  */

const prompt = require('prompt-sync')();

// Definimos la constante PI
const PI = 3.14159;

// Pedimos el radio al usuario
let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// Calculamos el área del círculo (PI * radio * radio)
let area = PI * radio * radio;

// Calculamos el perímetro del círculo (2 * PI * radio)
let perimetro = 2 * PI * radio;

// Mostramos los resultados
console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);
