/* Ejercicio 6: La tabla de multiplicar 
Consigna: 
Crea un programa que le pida al usuario un número y luego imprima su tabla de 
multiplicar desde el 1 hasta el 10. Usa un ciclo for. */

const prompt = require('prompt-sync')();

// Solicitamos al usuario que ingrese un número
let numero = parseInt(prompt("Ingresa un número para calcular su tabla de multiplicar: "));

// Generamos la tabla de multiplicar
console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
