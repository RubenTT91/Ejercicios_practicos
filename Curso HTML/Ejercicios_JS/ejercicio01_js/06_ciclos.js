//######### break sirve para detener un ciclo antes de que se cumpla la condicional

for(let contador=0; contador<=10; contador++){
    if(contador % 2  == 0){
        console.log(contador);
    }
    if(contador == 6){
        break;
    }
}



//######### continue Evita que se sigan ejecutando las ir a la siguiente interacción ()
// No quiero imprimir el número (6), entonces cuando encuentr el número 6 digo que continue 
//a la siguiente interacción es decir que se devuelva al for nuevamente e incremente y continue con la interacción

for(let contador=0; contador <= 10; contador++){
    if(contador ==6 ){
        continue;
    } else if(contador%2 == 0)
    {
        console.log(contador);
    }
}