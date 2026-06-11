//Estructura de repeticion

//While mientras se cumpla con la condicion logica entonces ejecuta el bloque de codigo

/* 
While(condicion logica) {
todas las lineas de coidgo que planeo repetir varias veces
agregar una linea que haga que la condicion logica deje de cumplirse en algun momento
*/

//let contador = 1;

/*while (contador <= 10) {
    console.log(`Fila ${contador}`);
    contador++;
} */

const pantalla = document.getElementById('pantalla');

/* do {
    pantalla.innerHTML += `<p>Fila ${contador}</p>`;
    contador++;
} while (contador <= 50); */

for (let contador = 1; contador <=30 ; contador++) {

    pantalla.innerHTML += `<p>Fila ${contador}</p>`;
}
