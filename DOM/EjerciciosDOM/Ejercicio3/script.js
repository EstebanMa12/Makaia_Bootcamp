const array1=[{
    nombre:"Ana",
    apellidos:"Ramirez",
    telefono:"1"
},
{
    nombre:"Alicia",
    apellidos:"Fea",
    telefono:"2"
},
{
    nombre:"Isabela",
    apellidos:"Rez",
    telefono:"3"
},
{
    nombre:"Elizabeth",
    apellidos:"Mamacita",
    telefono:"4"
},
{
    nombre:"Juan",
    apellidos:"Pepito",
    telefono:"5"
}]

const funcionCallback = (newArr)=>{
    newArr.forEach(element => {
        console.log(`${element.nombre} ${element.apellidos}`);
    });
}

const ejercicio3 =(arr,funcion)=>{
    const tempArr=[]
    arr.forEach(element => {
        if(element.nombre.startsWith('A')){
            tempArr.push(element)
        }
    });
    funcion(tempArr)
}

ejercicio3(array1,funcionCallback)