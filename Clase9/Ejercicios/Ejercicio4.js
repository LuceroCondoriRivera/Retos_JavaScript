// Ejercicio 4:  
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre. 

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un nombre
let nombreUsuario = prompt("Ingrese su nombre:");
let miNombre = "Lucero"; // Cambia este valor si es necesario

// Verificamos si los nombres coinciden
if (nombreUsuario.toLowerCase() === miNombre.toLowerCase()) {
    console.log("¡Tenemos el mismo nombre!");
} else {
    console.log(`Hola, ${nombreUsuario}, tu nombre es diferente al mío.`);
}