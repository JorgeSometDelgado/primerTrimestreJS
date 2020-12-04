/////////////////////////////////////CONTROL MENORES DE EDAD//////////////////////////////////////////
function controlMenoresEdad() {
    let edad=0;
    edad=prompt("Introduce tu edad");
    if (edad>=18) {
       location.href="productos.html";
    }else{
        let mensajeMenores = new MensajeError();
        mensajeMenores.imprimirMensajeMenores();
    }
}
/////////////////////////////////////CARRITO DE ENCARGOS//////////////////////////////////////////
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

/////////////////////////////////////VALIDACIÓN FORMULARIO//////////////////////////////////////////

window.onload = iniciar;
function iniciar() {
    document.getElementById("formulario").addEventListener('submit', validar, false);
}

function validar(evento) {
    var todo_correcto = true;
    
    //Validación nombre:
    var nombre="";
    var controlaNombre;
    if (document.getElementById("nombre").value == "") {
        todo_correcto = false;
        alert("El nombre no puede estar vacío");
    }else{
        controlaNombre=nombre.split(" ");
    if(controlaNombre.length<=1){
    todo_correcto = false;
       alert("Debe introducir al menos uno de sus apellidos");
   }
    }
      
   
    //Validación e-mail:
    var expresionEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=document.getElementById("email").value;
    
        if (document.getElementById("email").value == "") {
            todo_correcto = false;
            alert("El email no puede estar vacío");
        }else{
            if (!expresionEmail.test(email)) {
                todo_correcto=false;
                alert("El email no tiene el formato correcto");
            }
            
        }
    
    //Validación fecha de nacimiento:
    var expresionFecNac= /^(?:3[01]|[12][0-9]|0?[1-9])([/-])(0?[1-9]|1[1-2])\1\d{4}$/;
    var fecNac=document.getElementById("fecha").value;

        if (document.getElementById("fecha").value == "") {
            todo_correcto = false;
            alert("La fecha de nacimiento no puede estar vacía");
        }else{
            if (!expresionFecNac.test(fecNac)) {
                todo_correcto=false;
                alert("El formato de la fecha de nacimiento no es correcto(dd/mm/aaa)");
            }
        }
    
    
    //Validación mensaje:
    if (document.getElementById("mensaje").value == "") {
        todo_correcto = false;
        alert("El mensaje no puede estar vacío");
    }

    //Comprobación de que no hay ningín campo con errores para enviar el formulario:
    if(!todo_correcto){
        evento.preventDefault();
    }
    
}

function confirmaContacto() {
    confirm("¿Estás seguro de que quieres enviar este mensaje?");
}

function mensajeRespeto() {
    alert("Por favor, escribe tu mensaje de manera respetuosa y te contestaremos lo antes posible");
}

/////////////////////////////////////POO con JS//////////////////////////////////////////
function MensajeError() {
    this.imprimirMensajeMenores = function () {
        alert("No puedes visitar nuestros productos si eres menor de edad");
    }
}

    