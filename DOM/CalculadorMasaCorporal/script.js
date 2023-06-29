function calcularIMC() {
    let nombre = document.getElementById('nombre').value
    let alturaEnCm= parseFloat(document.getElementById('altura').value)
    let pesoKg= parseFloat(document.getElementById('peso').value)
    let alturaEnM = alturaEnCm/100
    let IMC= Math.round(pesoKg/(alturaEnM*alturaEnM))
    let clasificacion
    if (IMC <18.5){
        clasificacion="estas en desnutrición"        
    }else if(18.5<IMC<25){
        clasificacion= "estas saludable"
    }else{
        clasificacion="usted tiene sobrepeso"
    }
    console.log(IMC);

    let respuesta = "Hola "+nombre+", tu IMC es "+ IMC + " y "+clasificacion

    alert(respuesta)
    document.getElementById('resultado').value = respuesta
}