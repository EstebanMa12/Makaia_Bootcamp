/* console.log("Enlazado correctamente");

let anio=2023;
console.log(anio);

//Pedir por teclado información para almacenar en las variables y ejectar operaciones segun el caso 

let  edad=parseInt(prompt("Ingresa tu edad para verificar si puedes tomar guaro"));
console.log(edad);

if (edad >=18){
    alert("Pola o miedo?")
}else{
    alert("A hacer chichito y a mimir :(")
} */

// EJERCICIO PARA PEDIR NOTAS Y MOSTRAR UN MENSAJE DE ACUERDO AL RANGO DE LA CALIFICACIÓN

/* let nota= parseFloat(prompt("Ingrese su calificación \n A continuación se le va a evaluar. "))

if(nota>=0 && nota<=10){
    if(nota<=2){
        alert("Pudiste haber estudiado más :c \n Muy deficiente")
    }else if( nota>=2 && nota<5){
        alert("Puedes mejorar \n Insuficiente")
    }else if(nota==6){
        alert("Buena crack \n Buena")
    }else if(nota<=9){
        alert("Haz escogido el camino de la excelencia \n Sobresaliente")
    }else if(nota>=10){
        alert("Mis respetos, que crack \n Excelente")
    }
}else{
    alert(" Nota no soportada por el sistema ")
} */


// OTRO EJERCICIO
//
/* let i
for (i=5;i<=10; i++){
    document.write(i)
    console.log(i);
} */

/* let resultado =""
do{
    let cadena = prompt("introduzca la cadena a crear")
    console.log(cadena);
    if (resultado == ""){
        resultado= resultado + cadena
    }else{
        resultado= resultado+" - "+cadena
    }
}while(confirm("Desea Seguir?"))
document.write(resultado) */
let i 
for(i=1;i<=500;i++){
    if((i%4)==0){
        console.log("Múltiplo de 4");
    }else if ((i%9)==0){
        console.log("Múltiplo de 9");
    }else if((i%5)==0){
        console.log(i);
        console.log("------------------");
    }else{
        console.log(i);
    }
}

