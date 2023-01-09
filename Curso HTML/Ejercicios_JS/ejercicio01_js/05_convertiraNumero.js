let numeroRecibido = "21";

let edad = Number(numeroRecibido);

if (isNaN(edad)) {
  console.log("El valor ingresado no es un número");
} else {
  if (edad >= 18) {
    console.log("Puede votar");
  } else {
    console.log("No puede votar, muy joven");
  }
}

//######## Ejercicio IF/Else. Saludar depndiendo de la hora
/**
 * 6 - 11 am - Buenos días
 * 12 - 18 - Buenas tardes
 * 19 - 24 - Buenas noches
 * 0 - 6  am esta durmiendo *
 */

let hora;
console.log(hora);
if (isNaN(hora)|| (hora<0 && hora>24)){

    console.log("Por favor digite un número entre 0 - 24");
        } else { 

            if (hora>0 && hora <= 6) {
                console.log("Está dormido ");
            } else if (hora>6 && hora <= 11) {
                console.log("Buenos días");
            } else if (hora > 11 && hora <= 18){
                console.log("Buenas tardes");
            } else if (hora > 18 && hora < 24){
                console.log("Buenas noches");
            }

}

