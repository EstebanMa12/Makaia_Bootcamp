
// Definición de la clase Usuario
class Usuario {
    constructor(identificacion,nombre, documento, contraseña, tipoUsuario) {
        this.id= identificacion;
        this.nombre = nombre;
        this.documento = documento;
        this.contraseña = contraseña;
        this.tipoUsuario = tipoUsuario;
    }
  }
// Definición de la clase Cajero, esta clase va a almacenar los valores de los billetes y las funciones que va a ejecutar esta clase
class Cajero{
    constructor(){
        this.billetes={
            5:0,
            10:0,
            20:0,
            50:0,
            100:0
        }
    }
    solicitarBilletes(){
        console.log("Cargando.........");
        // Solicitar la denominación de los billetes
        for (let denominacion in this.billetes){
            const billetes=parseInt(prompt(`Ingrese la cantidad de billetes de ${denominacion} mil pesos`));
            this.billetes[denominacion]+= billetes
        }
        console.log("¡Dinero cargado exitosamente!");
        console.log("-".repeat(10));
    }

    mostrarCajero(){
        console.log("La cantidad de billetes en el cajero es: ");
        let total=0;
        for (let denominacion in this.billetes){
            console.log(`${denominacion} mil pesos: ${this.billetes[denominacion]}`);
            total += denominacion*this.billetes[denominacion];
        }
        console.log(`Hay en total: ${total} mil pesos`);
        console.log("-".repeat(10));
        console.log("Gracias por usar nuestro servicio");
    }
    //console.log(mostrarCajero());

    retiroCajero(cantidad){
        console.log("Realizando Retiro de dinero");
        let disponible=0;
        let retiro ={};

        for (let denominacion in this.billetes){
            disponible+= denominacion*this.billetes[denominacion];
        }
        if (disponible === 0){
            console.log("Cajero en mantenimiento, vuelva pronto")
            return;
        }
        console.log(`La cantidad a retirar es: ${cantidad} mil pesos`);
        const claves = Object.keys(this.billetes).reverse();

        let cantidadRestante = cantidad;

        for (let denominacion of claves){
            const billetesDisponibles = this.billetes[denominacion]
            const retirado = Math.min(Math.floor(cantidadRestante/denominacion),billetesDisponibles);

            retiro[denominacion]=retirado;

            this.billetes[denominacion]-= retirado;


            cantidadRestante -= denominacion*retirado;
            disponible -= denominacion*retirado;
        }

        if(cantidadRestante>0){
            console.log(`No se puede retirar la cantidad deseada, se le entrega un monto menor: ${cantidad-cantidadRestante} mil pesos`);
        }else{
            console.log(`Retiro completo, se le entrega ${cantidad} mil pesos`);
        }
        console.log("El cajero le entrega: ")
        for (let denominacion in retiro){
            console.log(`${retiro[denominacion]} billetes de ${denominacion} mil pesos`);
        }
        console.log("Queda en el cajero");
        this.mostrarCajero();
        console.log("-".repeat(10));
    }
}


const usuarios=[
    new Usuario(1,"Lorenzo",1234,"Holamundo",1),
    new Usuario(2,"Maria Bernarda",123,"Hola789",2)
] ;

const cajero= new Cajero();

function iniciarPrograma(){
    console.log("BIENVENIDO");
    while (true) {
        const documento= parseInt(prompt("Ingrese porfavor el documento del usuario: "))
        const contraseña= prompt("Ahora ingrese la contraseña: ")

        // Busqueda del usuario 
        const usuario = usuarios.find(u => u.documento === documento && u.contraseña === contraseña);

        // Validación del usuario 
        if (!usuario) {
            // Si el usuario no existe
            console.log("El usuario no existe.");
            iniciarPrograma();
            //continue;
        }
        
        if (usuario.tipoUsuario === 1) {
        // El usuario es administrador
        console.log(`Bienvenido ${usuario.nombre}`);
        cajero.solicitarBilletes();
        cajero.mostrarCajero();
        } else { 
        // El usuario es cliente
        console.log(`Bienvenido ${usuario.nombre}`);
        cajero.retiroCajero(parseInt(prompt("Ingrese la cantidad a retirar en mil pesos:")));
        iniciarPrograma();
    }}
}

iniciarPrograma();

//console.log(cajero.mostrarCajero());


 