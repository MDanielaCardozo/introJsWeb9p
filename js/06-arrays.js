const pantalla = document.getElementById("pantalla")

function mostrarPeliculas(notas) {
    pantalla.innerHTML += `<h2>Lista de peliculas - elementos: ${peliculas.length}</h2>`
    pantalla.innerHTML += `<p>Notas: ${notas}</p>`;

    let listaPeliculas = "<ul>";
    for (let i = 0; i < peliculas.length; i++) {
        listaPeliculas += `<li>${i} - ${peliculas[i]}`
    }
    listaPeliculas += "</ul>"
    pantalla.innerHTML += listaPeliculas
}

//como instanciar un array vacio
const colores = [];

//declarar un array con datos
const peliculas = [
  "Star war: Ep. 1",
  "Star war: Ep. 2",
  "F1",
  "El caballero",
  1,
  2026,
  true,
];

console.log(peliculas[0]);

mostrarPeliculas('Arreglo original')

//Agregar elementos en un array

peliculas.unshift("Jurassic park", "Jurassic Park II");
mostrarPeliculas('unshift(): Agregamos dos elementos al principio del array')

peliculas.push("Interestellar")
mostrarPeliculas("push(): agregamos elementos al final del array")

peliculas.splice(6, 0, "La vida es bella")
mostrarPeliculas("splice(): Agregamos un elemento en la posicion seis")

peliculas[7] = 'Black Mirror';
mostrarPeliculas("Modificamos un elemento del array")

//elmininar elementos del array
//peliculas.shift()
//mostrarPeliculas("shift(): Eliminar el primer elemento del array")

peliculas.pop()
mostrarPeliculas("pop(): Eliminamos el elementos en laultima posicion")

console.log(peliculas[1].includes('Star'));
console.log(peliculas[1].includes("STAR WAR"));

console.log(typeof peliculas);


const sagaStarWar = peliculas.filter((pelicula) => typeof pelicula === "string" && pelicula.toLowerCase().includes('star'))

const peliculaBuscada = peliculas.find((peli)=> peli.toLowerCase().includes("jurassic"))

console.log('Ejemplo de find jurassic park:', peliculaBuscada);

const indicePeliBuscada = peliculas.findIndex((peli)=> peli.toLowerCase().includes('caballero'))

console.log("Ejemplo de findIndex caballero de la noche:", indicePeliBuscada);

pantalla.innerHTML += '<h2 class=text-danger>Peliculas de Star Wars </h2>'

let itemStarWars = sagaStarWar.map((peli) => `<li> ${peli}</li>`).join('')
pantalla.innerHTML += `<ul>${itemStarWars}`
