// Ejercicio 2:  
// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
// valores numéricos de tu elección. Pide al usuario que ingrese un 
// número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

// Definimos las constantes para el rango
const RANGO_MINIMO = 5; // Puedes cambiar este valor
const RANGO_MAXIMO = 10; // Puedes cambiar este valor

// Pedimos al usuario un número
let numero = parseFloat(prompt("Ingrese un número:"));

// Verificamos si el número está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango");
} else {
    console.log("El número está fuera del rango");
}
