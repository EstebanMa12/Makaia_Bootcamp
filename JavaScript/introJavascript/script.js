
const list = ["A","B","C"]
// CICLO O BUCLE

/* for (let i=0;i<list.length;i++){
    console.log(("i = ", i," list", list[i]));
} */

function action(element,index) {
    console.log("i = ", index," list", element);
}

/* list.forEach(action)  */


const frutas= ["Manzanas","Peras","Guayabas"]

/* frutas.forEach(action) */


// EJERCICIO DE LA FUNCIÓN CALLBACK 

let a =Boolean(1=="1")
console.log(a);

let suma = function(a) {
    return a +10     
}

const arreglo = [1,2,3,4];
const nuevoArreglo= arreglo.map(arreglo => arreglo*2)

function doubled(arreglo){
	return arreglo.map(arreglo => arreglo*2)
}

a= doubled(arreglo)
console.log(a);

console.log(nuevoArreglo);

let persona1={
    nombre: "Ramirin",
}

let saludo = function(a){
    console.log(`¡Buen día! ${this.nombre}`);
}


 
saludo(persona1)
console.log(persona1);



function Auto(marca, modelo,annio) {
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;    
}


function pushArray(array,marca,modelo,annio){
    let a = new Auto(marca,modelo,annio)
    return array.push(a)
}

const autosComprables=[]

pushArray(autosComprables,"Lamborguini","Huracan",2023)
pushArray(autosComprables,"Volkswagen","Gol",2022)
pushArray(autosComprables,"Mazda","CX3",2023)
pushArray(autosComprables,"Mazda","CX5",2019)
pushArray(autosComprables,"Tesla","Model 4",2026)


autosComprables.push(
    "lamborguini",
    "HolaMundo"
)


console.log(autosComprables);

// FILTRAR UN ARRAY

let newArray = autosComprables.filter(function(articulo){
    return articulo.annio > 2022
})

let newArrayOption2 = autosComprables.filter(carro => carro.annio >2022)

console.log(newArray);
console.log(newArrayOption2);

// MAP

let newArrayMap= autosComprables.map(carro => carro.annio + 3)
console.log(newArrayMap);

//FIND

let newArrayFind= autosComprables.find(carro => carro.annio ===2023)
console.log(newArrayFind);

// ForEach


newArrayMap.forEach(carro => console.log(carro-1));

// *CLASES
// !Important info 

// CLASE NOMBRADA
class perrito{
    constructor(raza,tamaño, carnet){
        this.raza=raza;
        this.tamaño=tamaño;
        this.carnet=carnet;
    }
}

// CLASE ANONIMA 
let perrito2 = class{
    constructor(raza,tamaño, carnet){
        this.raza=raza;
        this.tamaño=tamaño;
        this.carnet=carnet;
    }
}

// console.log(typeof perrito);
// console.log(typeof perrito2);


// EXTENDS

class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hablar(){
        console.log(this.nombre +" hace ruido");
    }
}
class Perro extends Animal{
    hablar(){
        console.log(this.nombre+" ladra");
    }
}

// * CALLBACKS

function saludar(nombre) {
    console.log("Hola "+nombre);
}

function ingresarUsuario(callbac) {
    let nombre=  "manuelita "
    callbac(nombre);
}

ingresarUsuario(saludar)

//? Será que esta bien?
// * ASINCRONIA

setTimeout(function(){
    console.log("¡Hola, llegas a tiempo!");
},1000);
console.log("¡Yo llego primero!");


// * PROMESAS  


let promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Time out");
    },1000);
});


promesa.then((data)=>{
    console.log(data);
});






