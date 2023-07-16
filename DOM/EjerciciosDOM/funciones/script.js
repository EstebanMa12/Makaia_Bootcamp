const sumarNumeros = (a,b) =>{
    if(a && b){ // Si a y b son números validos puede operar 
        return a + b
    }else{
        return a +10
    }
}

console.log("ejecución con dos parametros : ", sumarNumeros(10,2));
console.log("Ejecución con un parametro: ", sumarNumeros(5));
console.log("Con 0", sumarNumeros(0,2));


const arr=[];

const agregarElementos=(elemento) =>{
    arr.push(elemento)
}

const eliminarElemento=(indice) =>{
    if(indice>=arr.length){
        arr.pop();
    }else{
        arr.slice(indice,1)
    }
}

const alterarArray = (addElement, id) =>{
    const objeto = {
        id,
        tipo: "Animal",
        nombre:"Jello"
    }
    addElement(objeto);
    return arr
}

alterarArray(agregarElementos,1);
alterarArray(agregarElementos,2);
alterarArray(agregarElementos,3);
console.log("array", arr)

eliminarElemento(20);
eliminarElemento(0)


console.log("Array",arr);