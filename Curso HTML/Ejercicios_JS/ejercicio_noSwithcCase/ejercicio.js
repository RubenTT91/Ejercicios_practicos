/*
 El siguiente código da un disfraz a loki ( let loki=''), dependiendo de que adversarío tenga
 (let adversario='')  
 */

let adversario = 'Hulk';
let loki ='';

switch(adversario){
    case 'Iron-man':
        loki = 'Magneto';
        break;    
    case 'Hulk':
        loki ='Thanos';
        break;
    case 'Thor':
        loki ='Odin';
        break;
    default:
        loki='loki';
}
console.log(loki);

/** 
 *Ahora bien podemos hacer uso de una estructura de datos
 *
*/
let adversario2 ='Thor';

const LOKI_DISFRACES ={
    'Irgon-man': 'Magneto',
    Thor: 'Odin',
    Hulk: 'Thor'
}

const LOKI_DEFAULT_DISFRAZ = 'Loki';
const loki2  = LOKI_DISFRACES[adversario2] || LOKI_DEFAULT_DISFRAZ;
console.log(loki2);
