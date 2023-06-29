/*alert('El archivo .js está correctamente enlazado');

const numero1 = prompt("Por favor ingrese un numero");
const numero2 = prompt("Por favor ingrese otro numero");

let suma = Number(numero1) + Number(numero2);

alert(`la suma de los numeros es ${suma} `)
*/
const usuarios = [
    {
      nombre: "Patricia",
      cedula: '1234567',
      contrasena: '123',
      tipo: 1
    },
    {
        nombre: 'Humberto',
        cedula: '1234567',
        contrasena: '123',
        tipo: 2
    },
    {
        nombre: 'Sebastian',
        cedula: '1234567',
        contrasena: '1234',
        tipo: 2
    },
];

let totaldetodo = 0; 

const cajero = [
    // Inicio posicion 0
    { 
        denominacion: 5000,
        cantidad: 0,
        total: 0
    },
    // Fin posicion 0
    // Inicio posicion 1
    {
        denominacion: 10000,
        cantidad: 0,
        total: 0
    },
    // Fin posicion 1
    // Inicio posicion 2
    {
        denominacion: 20000,
        cantidad: 0,
        total: 0
    },
    // Fin posicion 2
    // Inicio posicion 3
    {
        denominacion: 50000,
        cantidad: 0,
        total: 0
    },
    // Fin posicion 3
    // Inicio posicion 4
    {
        denominacion: 100000,
        cantidad: 0,
        total: 0
    }
    // Fin posicion 4
]
/*
let new5000 = Number(prompt("por favor ingrese el numero de billetes de 5000"));
cajero[0].cantidad += new5000; // cantidad = cantidad + nuevaCantidad; cantidad = cantidad - nuevaCantidad -> cantidad -= nuevaCantidad
cajero[0].total = cajero[0].cantidad * cajero[0].denominacion


let new10000 = Number(prompt("por favor ingrese el numero de billetes de 10000"));
cajero[1].cantidad += new10000;
cajero[1].total = cajero[1].cantidad * cajero[1].denominacion

let numero = prompt("digita un numero");
// "9" -> 9 Number(prompt("digita un numero"))

let user = prompt("Por favor ingrese su usuario:");
let contrasena = prompt("Por favor ingresa tu contraseña");


/**
 * forEach -> devuelve cada objeto del array
 * find -> devuelve el objeto que coincida con una condicion especificada
 * filter -> devuelve un array con todos los objetos que cumplan una condicion especifica
 * findIndex -> devuelve el index o sea, la posicion del array donde se encuentra un objeto con una condicion especifica
 */
/*
usuarios.forEach(item => {
    console.log("este es el item en el for each", item)
})

const filteredUsers = usuarios.filter(item => item.contrasena == '123')
console.log("filtered users", filteredUsers);

const index = usuarios.findIndex(item => item.nombre == 'Humberto')
console.log("el index es", index);



const findedUser = usuarios.find(item => item.nombre == user && item.contrasena == contrasena)
console.log("finded user", findedUser);

let isAdmin = false;

if(!findedUser){
    alert("Usuario o contraseña invalido");
    user = prompt("Por favor ingrese su usuario:");
    contrasena = prompt("Por favor ingresa tu contraseña");
} else {
    findedUser.tipo == 1 ? isAdmin = true : isAdmin = false;
}

// simular retiro
/* 
cajero = [
    {denominacion: 5000, cantidad: 5, total: 25000}, 
    {denominacion: 10000, cantidad 2, total: 20000},
    {denominacion: 20000, cantidad: 5, total: 100000}, 
    {denominacion: 50000, cantidad 2, total: 100000},
    {denominacion: 100000, cantidad: 5, total: 500000},
]
total = 745000

retiro = 400000


billetesde100 = 400000/100000 = 4
if cajero[4].cantidad >= billetesDe100
si -> billetesAretirar.push({denominacion: 100000, cantidad: billesde100})
cajero[4].cantidad -= billetesde100

*/
const nombres =[
    "Ana",
    "Monica",
    "Sebastian",
    "Leonardo",
    "Natalia"
];

const saludar = (nombre) => {
    return 'hola: ' + nombre;   
}
nombres.forEach(nombre => {
    console.log("esta es la invocacion de la funcion ", saludar(nombre))
})

const personas = [
    {
        nombre: "Ana"
    },
    {
        nombre: "Monica"
    },
    {
        nombre: "Sebastian"
    },{
        nombre: "Leonardo"
    }
]
/*
function saludar(nombre) {
    return 'hola: ' + nombre; 
}*/





personas.forEach(persona => {
    console.log("esta es la invocacion de la funcion con objetos", saludar(persona.nombre))
})

console.log("esta es la funcion ", saludar)
console.log("esta es la invocacion de la funcion ", saludar("Ana"))
console.log(typeof saludar);

const sumarNumeros = (numero1, numero2) => {
    if(numero2 != undefined) {
        return numero1 + numero2
    } else {
        return numero1 + 10;
    }
}

console.log("ejecucion con dos parametros: ", sumarNumeros(1,2))
console.log("ejecucion con un parametros: ", sumarNumeros(1))
console.log("ejecucion con parametro 0: ", sumarNumeros(0, 2))

let arr = [];

const agregarElementos = (elemento) => {
    arr.push(elemento);
}

const eliminarElemento = (indice) => {
    console.log("indice ", indice)
    if(indice >= arr.length){
        arr.pop();
        console.log("hizo pop ", arr)
    } else {
        arr.splice(indice, 1)
        console.log("hizo slice ", arr)
    }
}

const alterarArray = (addElement, id) => {
    const objeto = {
        id,
        tipo: "animal",
        nombre: "jello"
    }
    addElement(objeto);
    return arr;
}

alterarArray(agregarElementos, 1);
alterarArray(agregarElementos, 2);
alterarArray(agregarElementos, 3);
console.log("array ", arr )

eliminarElemento(20);
eliminarElemento(0);

console.log("array ", arr )