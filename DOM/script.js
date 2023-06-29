console.log("Conexión Hecha");


let datos=[]

const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const telefono = document.querySelector("#telefono")
const btn = document.querySelector("#guardar")

function btnOnClick() {
    console.log("Boton presionado");
    datos.push(
        nombre.value,
        apellido.value,
        telefono.value
    ) 
    console.log(datos); 
}