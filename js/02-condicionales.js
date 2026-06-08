//condicionales simples

/* if (condition) {
    //codigo a ejecutar si se cumple con la condicion
}  */

//condicionales dobles

/* if (condition) {
    //codigo a ejecutar si se cumple con la condicion
} else {
    //codigo a ejecutar si no cumple con la condicion
} */

    //Operador ternario

  /*   () ? {} : {} */

  //Pedir al usuario que nos cargue su edad para evaluar si es mayor de edad o no

/*   const edad = parseInt(prompt("Ingrese su edad"));

  console.log(edad);
  
console.log(isNaN("hola"));
console.log(isNaN("18"));
console.log(isNaN(18)); */

/* if (isNaN(edad)) {
    alert("No es un dato valido")
} else {
    if (edad >= 18 ) {
        document.writeln("Sos mayor de edad 😎")
    } else {
        document.writeln("Sos menor de edad 😴")
    }
} */

//!isNaN(edad) && edad >= 18 ?  document.writeln("Sos mayor de edad 😎") :  document.writeln("Sos menor de edad 😴") 

const esUsuarioAdmin = false;

const tieneAcceso = false;

if (esUsuarioAdmin && tieneAcceso) {
    console.log("Acceso total al panel de control");
} else if ( esUsuarioAdmin || tieneAcceso){
    console.log("Tiene acceso parcial al panel");
} else {
    console.log("Acceso denegado");
    
}