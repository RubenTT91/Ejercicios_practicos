/**
 * La declaración de las variables ya no usan VAR
 * Ahora solo se usa Let o CONST (CONST) debe ser en MAYUSCULA
 */


//Literal > Declaración de acuerdo al contenido. Ø NO SON BUENAS PRACTICAS
nombre= 'Ruben';


//CONST > una vez asignado el valor no se puede redefinir

const GENERO='Masculino';
console.log(GENERO);
//Al intentar cambiar el valor de la CONST, arroja TypeError: Assignment to constant variable.
//## GENERO="Femenimo";
//## console.log(GENERO);

//LET> permiten modificar el valor 

let edad=30;
console.log("Han pasado 5 años, ahora la edad es ")
edad= edad+5;
console.log(edad);


// Buenas practicas para asignación de datos

//Si son más de 2 palabras, la segunda palabra debe tener la primera letra en mayus ##-- ROTACIÓN DE ALTAS Y VAJAS--####

let nombreCompleto = "Ruben Dario Toro Torres";
console.log(nombreCompleto);


//Declarar varias en una sola linea 

let x, y;
x=10, y=20;
let z = x+ y;
console.log(z);