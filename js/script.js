function controlMenoresEdad() {
    let edad=0;
    edad=prompt("Cuantos años tienes");
    if (edad>=18) {
        alert("Puesto que eres mayor de edad, puedes entrar en nuestra web. ¡Bienvenido!");
       location.href="productos.html";
    }else{
        let mensajeMenores = new MensajeError();
        mensajeMenores.imprimirMensajeMenores();
    }
}

function compra() {
    let producto="";
    let carrito= new Array();
    let fecha = new Date();
    alert("Vas a proceder a escribir los artículos que quieres encargar, asegúrate de escribir bien sus nombres, tal y como aparecen en la tabla de productos");
    do{
         producto=prompt("¿Qué productos quieres encargar? (presiona 0 para terminar tu encargo)").toLowerCase();
        if (producto!="vino tinto"&& producto!="vino blanco"&& producto!="cognac"&& producto!="vinagre" && producto!="0") {
            do{
                producto=prompt("Ha habido un error, vuelva a itroducir el nombre del producto (0 para terminar el encargo)").toLowerCase();
                if (producto=="vino"&&producto=="licor") {
                    carrito.push(producto);
                }
            }while(producto!="vino tinto"&& producto!="vino blanco"&& producto!="cognac"&& producto!="vinagre" && producto!="0")
        }
        carrito.push(producto);
    }while(producto != "0");
    carrito.pop();
    console.log(carrito);
    document.getElementById("escribeEncargo").innerHTML="Su pedido de ("+carrito+") ha sido registrado en la fecha "+fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()+", pede venir a recogerlo cuando quiera";
}

window.onload = iniciar;
function iniciar() {
    document.getElementById("formulario").addEventListener('submit', validar, false);
}

function validar() {
    alert("ok");
    var todo_correcto = true;
    //Validación nombre:
    if (document.getElementById("nombre").value == "") {
        todo_correcto = false;
        alert("El nombre no puede estar vacío");
    }
   /*
    //Validación e-mail:
    var expresionEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=document.getElementById("email").value;
    if (!expresionEmail.test(email)) {
        todo_correcto=false;
        alert("ERROR: El email no tiene el formato correcto");
        document.getElementById("errores").innerHTML = "ERROR: El email no tiene el formato correcto";
        document.getElementById("email").focus();
        document.getElementById("email").classList.add("error");
    }
    //Validación fecha de nacimiento:
    var expresionFecNac= /^(?:3[01]|[12][0-9]|0?[1-9])([/-])(0?[1-9]|1[1-2])\1\d{4}$/;//Está dividida en 3 partes separadas por [/-] tal y como indicaba el ejercicio.
    var fecNac=document.getElementById("fecha").value;
    if (!expresionFecNac.test(fecNac)) {
        todo_correcto=false;
        document.getElementById("errores").innerHTML = "ERROR: El formato de la fecha no es correcto";
        document.getElementById("fecha").focus();
        document.getElementById("fecha").classList.add("error");
    }
    */
    //Comprobación de que no hay ningín campo con errores para enviar el formulario:
    if(!todo_correcto){
        evento.preventDefault();
    }
}

//POO con JS
function MensajeError() {
    this.imprimirMensajeMenores = function () {
        alert("No puedes entrar en nuestra web si eres menor de edad");
    }
}

    