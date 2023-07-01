const formulario = document.querySelector("form")

let listarCita = document.getElementById('listarCita')
let buscar = document.getElementById('btnBuscar')
let busqueda = document.getElementById('busqueda')
let citas =[]

const capturarDatos =() =>{
    const nombre = document.getElementById('nombre').value
    const fecha= document.querySelector('#fecha').value
    const hora =document.getElementById('hora').value
    const sintoma = document.getElementById('sintomas').value

    let registro={nombre,fecha,hora,sintoma}
    citas.unshift(registro)
    localStorage.setItem("citas",JSON.stringify(citas))
    getLocalStorage()
    
}
// Hacer el evento submit al formulario para que me capture los datos 

// Hacer que se me muestre la información almacenada en el localstorage por medio de un innerHTML y se me refleje en la sesión de agendar 