const nombre = document.getElementById('nombre');

const arrProductos = [];
const formulario = document.querySelector("form");

const printProductos = () => {
    let html = ``;
    arrProductos.forEach(item => {
        const li = `<li>${item.nombre}</li>`
        html += li
    });
    const ul = document.getElementById('tareas')
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