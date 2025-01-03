// Ejercicio 3: 
// Declara dos variables booleanas condicion1 y condicion2. Pide al 
// usuario que ingrese dos valores booleanos (true o false) y muestra el 
// resultado de diversas combinaciones lógicas.

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese valores booleanos
let condicion1 = prompt("Ingrese true o false para la primera condición:").toLowerCase() === "true";
let condicion2 = prompt("Ingrese true o false para la segunda condición:").toLowerCase() === "true";

// Mostramos los resultados de diversas combinaciones lógicas
console.log(`condicion1 AND condicion2: ${condicion1 && condicion2}`);
console.log(`condicion1 OR condicion2: ${condicion1 || condicion2}`);
console.log(`NOT condicion1: ${!condicion1}`);
console.log(`NOT condicion2: ${!condicion2}`);