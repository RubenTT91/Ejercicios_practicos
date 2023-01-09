// Forma antigua 
//let autos = new Array('Volvo', 'Renaul', 'Mazda');

let autos = ['Volvo', 'Renault', 'Mazda', 'Tesla', 'Mercedez Benz'];
//Recorrer Arreglos, con ForEch
autos.forEach((elementos) => console.log(elementos));

//Recorrer indice por indice (FOR)
let autos = ['Volvo', 'Renault', 'Mazda', 'Tesla', 'Mercedez Benz'];
for(let i=0; i< autos.length;i++){
    console.log(autos[i]);
}


//############## MODIFICAR ARREGLOS PUSH. Al final
let autos2 = ['Volvo', 'Renault', 'Mazda', 'Tesla', 'Mercedez Benz'];
autos2.push('Pichirilo');
console.log(autos2);

//############ Agregar sin dejar elmentos vacios, con el .length

let autos3 = ['Volvo', 'Renault', 'Mazda', 'Tesla', 'Mercedez Benz'];
autos3[autos3.length]='Chevrolet';
console.log(autos3);

