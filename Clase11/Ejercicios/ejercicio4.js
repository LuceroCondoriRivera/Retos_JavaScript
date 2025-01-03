/* Ejercicio 4: ¿Es par o impar? 
Consigna: 
Los números pueden ser pares o impares. Escribe un programa que le pida al 
usuario un número y determine si es par o impar. Muestra un mensaje 
explicativo indicando qué significa cada caso. */

const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número para verificar si es par o impar: "));

// Determinamos si el número es par o impar
if (numero % 2 === 0) {
    console.log("El número es par. Esto significa que se puede dividir en dos partes iguales.");
} else {
    console.log("El número es impar. Esto significa que no se puede dividir en dos partes iguales.");
}
