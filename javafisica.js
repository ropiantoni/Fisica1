
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
    var velocidad1 = document.getElementById("vel-uno").value;
    var velocidad2 = document.getElementById("vel-dos").value;
    var posicion1 = document.getElementById("pos-uno").value;
    var posicion2 = document.getElementById("pos-dos").value;
    var op = document.getElementById("opcion").value;
    var tiempo;
    var distancia;
    tiempo = (document.getElementById("pos-uno").value - document.getElementById("pos-dos").value) / (document.getElementById("vel-dos").value - document.getElementById("vel-uno").value);
    tiempo = tiempo * 3600;
    if(op == "DISTANCIA") {
        distancia = document.getElementById("pos-uno").value + document.getElementById("vel-uno").value * Number(tiempo);
        document.getElementById("resultado").value = distancia + "m";
    }

    if(op == "TIEMPO")
    {

        document.getElementById("resultado").value = tiempo + "s";

    }
}

function dibujar() {

    var myCanvas = document.getElementById("fondovideo");
    var ctx = myCanvas.getContext("2d");
    var centerY = myCanvas.height / 2;
    var auto1 = new Image(100,20);
    var auto2 = new Image(200,25);
    auto1.src = "Imagenes/auto.jpg";
    auto2.src = "Imagenes/auto2.jpg";
    var vector1 = 60;

    auto1.onload = function () {
        ctx.beginPath();
        ctx.drawImage(auto1,0,centerY-(auto1.height/2));
        ctx.moveTo(auto1.width,centerY);
        ctx.lineTo(auto1.width+vector1+100,centerY);

        ctx.moveTo(0,centerY+30);
        ctx.lineTo(700,centerY+30);

        //Parte flecha arriba
        ctx.moveTo(auto1.width+vector1+100,centerY);
        ctx.lineTo(auto1.width+vector1+90,centerY-10);

        //Parte flecha abajo
        ctx.moveTo(auto1.width+vector1+100,centerY);
        ctx.lineTo(auto1.width+vector1+90,centerY+10);


        ctx.stroke();}
    auto2.onload = function () {
        ctx.beginPath();
        ctx.drawImage(auto2,300,centerY-(auto2.height/2));

        ctx.stroke();}




}


function convertirUnidadesPosicion (){
    var unidad=getElementById("posicion");
    var valor;
    if(unidad == "m"){
        valor = valor/100000;

    }else if(unidad == "cm"){
        valor = valor/100000;
    }
    return valor;
}

function convertirUnidadesVel1 (){
    var unidad=getElementById("velocidad1");
    var valor;
    if(unidad == "m/s") {
        valor = valor * 3.6;
    }
    return valor;
}

function convertirUnidadesVel2 () {
    var unidad = getElementById("velocidad2");
    var valor;
    if (unidad == "m/s") {
        valor = valor * 3.6;
    }
    return valor;
}