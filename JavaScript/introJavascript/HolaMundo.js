let nombre = "Esteban"; // Las cadenas de caracteres siempre van en doble comilla
console.log(nombre);

/*Ejemplo de tipos de datos en JavaScript*/

// Tipo de dato objeto 

let objeto={
    nombre: "Esteban",
    apellido:"Maya",
    Edad: 23
}
console.log(objeto)
console.log(objeto['nombre'])

console.log(typeof objeto)

//Tipo de dato boolean ( True, False)

let bandera= false;

console.log(bandera);
console.log(typeof bandera)

// Tipo de dato Función 
function miFuncion(a){
    console.log("Hola mundo, mi nombre es "+a)
}

miFuncion(nombre)
console.log(typeof miFuncion)

// Tipo clase es una Función
class Persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido= apellido;
    }
}
console.log(typeof Persona)

//Tipo undefined
let x;
console.log(typeof x)

// null = ausencia de valor
let y=null;
console.log(y)

// ARRAYS

let autos=['BMW', 'Mazda','Volvo'];
console.log(autos);

var z='';
console.log(z),console.log(typeof z)

// DOMM
