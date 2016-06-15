
/**
 * @fileoverview Libreria Js Para problemas de encuentro
 * @author Piantoni & Bertorello
 * @version 0.1
 */
/**
 * @fileoverview Libreria Js Para problemas de encuentro
 * @author Piantoni & Bertorello
 * @version 0.1
 */

/**
 * Comprueba que los valores ingresados sean Numéricos, sino, envia mensaje al usuario y blanquea el campo de texto
 * @method comprobarNum
 * @param valorIngreso, valor ingresado que puede ser altura, masa, distancia o Indice de Rozamiento
 * @param nombreParametro, que puede ser altura, masa, distanciaFreno o CoeficienteRozamiento
 */
function comprobarNum(valorIngreso, nombreParametro) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.");
        document.getElementById(nombreParametro).value = "";
    }
}


/**
 * Calcula la distancia a la que se produce el encuentro o el tiempo que demora, según la opción que ingresa el usuario
 */
function calculo (){
    var velocidad1 = document.getElementById("vel1").value;
    var velocidad2 = document.getElementById("vel2").value;
    var aceleracion1 = document.getElementById("acel1").value;
    var aceleracion2 = document.getElementById("acel2").value;
    var op = document.getElementById("opcion").value;

    if(op == "DISTANCIA") {
        resultado = Number(velocidad1)+Number(velocidad2); //poner Formula!!
        document.getElementById("resultado").value = resultado;
    }
}

function dibujar() {
    var myCanvas = document.getElementById("fondovideo");
    var ctx = myCanvas.getContext("2d");
    var centerY = myCanvas.height / 2;
    var auto1 = new Image();
    auto1.src = "Imagenes/auto.jpg";
    var vector1 = 60;

    ctx.beginPath();
    ctx.drawImage(auto1,0,centerY-(auto1.height/2));
    ctx.moveTo(auto1.width,centerY);
    ctx.lineTo(auto1.width+vector1,centerY);

    //Parte flecha arriba
    ctx.moveTo(auto1.width+vector1,centerY);
    ctx.lineTo(auto1.width+vector1-10,centerY-10);

    //Parte flecha abajo
    ctx.moveTo(auto1.width+vector1,centerY);
    ctx.lineTo(auto1.width+vector1-10,centerY+10);

    //Escribir texto
    ctx.font = "15px Arial";
    ctx.fillText(vector1,auto1.width+vector1/2-10,centerY-3);

    ctx.stroke();
}