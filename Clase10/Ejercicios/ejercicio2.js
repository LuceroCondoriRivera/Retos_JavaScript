/* Ejercicio 2 – Usando las variables:  
Escribe un programa que pida al usuario que ingrese su nombre, su 
edad y su peso, y luego muestre un mensaje personalizado que incluya 
toda esta información. 
Desglosando el ejercicio deberás: 
1. Pide al usuario que ingrese su nombre. 
2. Pide al usuario que ingrese su edad. 
3. Pide al usuario que ingrese su peso. 
4. Muestra un mensaje personalizado que incluya el nombre, la edad 
y el peso del usuario. 
Pista: En el ejercicio anterior, declaramos valores en las variables. 
Ahora nos toca pedir datos al usuario, por lo que usaremos prompt
sync para solicitar esta información.  */

const prompt = require('prompt-sync')();  // Requerimos el paquete para usar prompt.

let nombre = prompt("Ingresa tu nombre: ");  // Pedimos el nombre del usuario.
let edad = prompt("Ingresa tu edad: ");  // Pedimos la edad.
let peso = prompt("Ingresa tu peso: ");  // Pedimos el peso.

console.log(`Hola, ${nombre}. Tienes ${edad} años y pesas ${peso} kg.`);  // Mostramos el mensaje.
