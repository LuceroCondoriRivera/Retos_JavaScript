/* Ejercicio 4 – Tipo de Datos:  
Declarar 4 variables utilizando la palabra reservada let y asignarles 
valores según el tipo de dato que sugiera su nombre. Además, realizar 
operaciones y validaciones adicionales sobre estos valores. 
Pasos a seguir: 
Declaración de Variables: 
1. Declara una variable llamada verdadero y asígnale un dato 
de tipo booleano (true o false). 
2. Declara una variable llamada texto y asígnale un string de tu 
elección (puedes usar cualquier mensaje que prefieras). 
3. Declara una variable llamada numero y asígnale un dato 
numérico (puedes usar cualquier número entero o decimal). 
4. Declara una variable llamada nada y asígnale un valor que 
represente la ausencia de valor en JavaScript. 
Operaciones y Validaciones: 
1. Realiza una operación matemática usando la variable 
número, por ejemplo, suma o resta con otro número de tu 
elección. 
2. Concatena el “string” de la variable texto con otro mensaje 
adicional. 
3. Verifica si la variable “verdadero” es true o false y muestra un 
mensaje diferente según el resultado. 
4. Implementa una condición para verificar si la variable nada 
es null y muestra un mensaje si es así.  */

// Declaración de Variables
let verdadero = true; // Tipo booleano
let texto = "Este es un mensaje de ejemplo"; // Tipo string
let numero = 42; // Tipo numérico
let nada = null; // Representación de ausencia de valor

// Operaciones y Validaciones

// 1. Operación matemática usando la variable 'numero'
let suma = numero + 8; // Suma 8 al valor de la variable 'numero'
console.log("Resultado de la suma:", suma);

// 2. Concatenación del string de la variable 'texto' con otro mensaje adicional
let mensajeCompleto = texto + " y este es el texto adicional.";
console.log("Mensaje completo:", mensajeCompleto);

// 3. Verificación de si la variable 'verdadero' es true o false
if (verdadero) {
    console.log("La variable 'verdadero' es true.");
} else {
    console.log("La variable 'verdadero' es false.");
}

// 4. Condición para verificar si la variable 'nada' es null
if (nada === null) {
    console.log("La variable 'nada' es null.");
} else {
    console.log("La variable 'nada' no es null.");
}
