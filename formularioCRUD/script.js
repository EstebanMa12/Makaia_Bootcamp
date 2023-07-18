let formulario = document.getElementById('formulario')
let btnemail= document.getElementById('btnCorreo')
let btEditar= document.getElementById('btnEditar')
let btEliminar= document.getElementById('btnEliminar')


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('id').style.display='none';
    document.getElementById('label-edit').style.display='none';
    document.getElementById('id').readOnly=true;
})
let email = document.getElementById('email')

email.addEventListener('input',()=>{
    document.getElementById('id').style.display='none'
    document.getElementById('label-edit').style.display='none'
})


formulario.addEventListener('submit', async e=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let lastname=document.getElementById('lastName').value
    let email=document.getElementById('email').value

    let  resp = await fetch('http://localhost:3000/usuarios/',{
        method: 'POST',
        body: JSON.stringify({
            nombre:name,
            apellido:lastname,
            correo:email
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    console.log(resp);
    let data = resp.json()
    console.log(data);
})