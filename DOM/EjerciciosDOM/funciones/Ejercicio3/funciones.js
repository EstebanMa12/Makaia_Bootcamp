const array1 = [
    {
        nombre: 'Ana',
        apellidos: 'Ramirez',
        telefono: '1',
    },
    {
        nombre: 'Andrea',
        apellidos: 'Gonzales',
        telefono: '2',
    },
    {
        nombre: 'Andrés',
        apellidos: 'Parra',
        telefono: '3',
    },
    {
        nombre: 'Leidy',
        apellidos: 'Muñoz',
        telefono: '4',
    },
    {
        nombre: 'Diana',
        apellidos: 'Loaiza',
        telefono: '5',
    }
]

const funcionCallback = (newArr) => {
    newArr.forEach(element => {
        console.log(`${element.nombre} ${element.apellidos}`)
    });
}


const ejercicio3 = (arr, funcion) => {
    const tempArr = [];
    arr.forEach((element) => {
       if(!element.nombre.startsWith('A')){
            tempArr.push(element)
       } 
    });
    funcion(tempArr);
}

//ejercicio3(array1, funcionCallback)

const showchanges = (e) => {
    console.log("cambios: ", e.target.value)
}
const nombre = document.getElementById('nombre');
nombre.addEventListener('change', (e) => {
    console.log("cambios del escuchador: ", e.target.value)
})
const arrProductos = [];
const formulario = document.querySelector("form");

const printProductos = () => {
    let html = ``;
    arrProductos.forEach(item => {
        const li = `<li>${item.nombre}</li>`
        html += li
    });
    const ul = document.getElementById('listaProductos')
    ul.innerHTML = html;
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const formdata = new FormData(formulario);
    
    const jsonData = {};
    for (let [key, value] of formdata.entries()) {
        jsonData[key] = value;
    }
    arrProductos.push(jsonData);
    console.log("array", arrProductos)
    printProductos();
})