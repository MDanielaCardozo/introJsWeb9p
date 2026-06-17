saludar()
//funcion tradicional sin parametros
function saludar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += '<p>Hola mundo🌎</p>'
}

//funcion con parametros/parametros por defecto
function saludarPersona(persona = "invitado", edad = 20) {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += `<p>Hola ${persona}`
    console.log('Edad' + edad)
}

saludarPersona("Joseph", 24)

/* function aplicarDescuento(precio, descuento) {
    const precioFinal = precio - ((precio * descuento) /100)
    console.log(precioFinal);
    //nunca se debe agregar una linea de codigo luego del return
    return precioFinal
} */

//aplicarDescuento(400, 10)
//const pantalla = "pantalla"

/* const aplicarDescuento = function (precio, descuento) {
    const precioFinal = precio - ((precio * descuento) /100)
    console.log(precioFinal);
    return precioFinal
} */

//aplicarDescuento(200, 10);

//arrow functions
//Son una forma mas moderna y compacto
const aplicarDescuento = (precio, descuento) => precio - ((precio * descuento)/100);

console.log(aplicarDescuento(300, 40));

//EJERCICIO CALCULADORA

/* Ejercicio: Calculadora básica con funciones
Objetivo
Crear una calculadora que permita realizar operaciones matemáticas básicas utilizando funciones.
Requisitos
Crear una función para cada operación:
Suma
Resta
Multiplicación
División
Solicitar al usuario:
El primer número.
El segundo número.
La operación que desea realizar.
Mostrar el resultado de la operación elegida.
Ejemplo de ejecución
Ingrese el primer número: 10
Ingrese el segundo número: 5

Seleccione una operación:
1. Sumar
2. Restar
3. Multiplicar
4. Dividir

Opción: 3

Resultado: 50 */
 
