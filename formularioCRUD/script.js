
console.log('Aqui estoy');
let formulario = document.getElementById('formulario')
let btnCorreo = document.getElementById('btnCorreo')
let btnEditar = document.getElementById('btnEditar')
let btnEliminar = document.getElementById('btnEliminar')

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('id').style.display ='none'
    document.getElementById('label-edit').style.display ='none'
    document.getElementById('id').readOnly = true
})
let email = document.getElementById('email')

email.addEventListener('input', ()=>{
    document.getElementById('id').style.display ='none'
    document.getElementById('label-edit').style.display ='none'
})

formulario.addEventListener('submit', async e =>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastName').value
    let email = document.getElementById('email').value

    let resp = await fetch('http://localhost:3000/usuarios/',{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastname,
            correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    console.log(resp);
    let data = resp.json()
    console.log(data);
})

btnCorreo.addEventListener('click', async () => {

    document.getElementById('id').style.display = 'block'
    document.getElementById('label-edit').style.display = 'block'

    let email = document.getElementById('email').value

    let resp = await fetch('http://localhost:3002/usuarios')
    let data = await resp.json()

    let modificar = data.find(user => user.correo === email)
    console.log(modificar);

    const { nombre, apellido, correo, id } = modificar

    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id
})

btnEditar.addEventListener('click', async () => {
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastName').value
    let emailModificar = document.getElementById('email').value

    let resp = await fetch(`http://localhost:3002/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameModificar,
            apellido: lastNameModificar,
            correo: emailModificar
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data);
})

btnEliminar.addEventListener('click',()=>{
    let idEliminar = document.getElementById('id').value
    
    let resp = fetch(`http://localhost:3000/usuarios${idEliminar}`,{
        method: 'DELETE'
    })
    let data = resp.json()
    console.log(data);
})