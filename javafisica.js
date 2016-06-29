
/**
 * @fileoverview Libreria Js Para problemas de encuentro
 * @author Piantoni & Bertorello
 * @version 0.1
 */

    var velocidad1;
    var velocidad2;
    var posicion1;
    var posicion2;
    var distancia;

//comprueba que el valor ingresado sea un numero, sino aparece una alerta por pantalla
function comprobarNum(valorIngreso, nombreParametro) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.");
        document.getElementById(nombreParametro).value = "";
    }

}


//funcion que va a transforma los valores a km o a km/h
function convertirUnidades (valor, unidad){
    if(unidad == "m"){
        valor = valor/1000;

    }else if(unidad == "cm"){
        valor = valor/100000;
    }else if(unidad == "m/s" ) {
        valor = valor * 3.6;
    }
    return valor;
}

//Calcula la distancia a la que se produce el encuentro o el tiempo que demora, según la opción que ingresa el usuario

function calculo (){
    
    var unidadPos1 = parseFloat(document.getElementById("Uposicion1").value.replace(",","."));
    var unidadVel1 = parseFloat(document.getElementById("Uvelocidad1").value.replace(",","."));
    var unidadPos2 = parseFloat(document.getElementById("Uposicion2").value.replace(",","."));
    var unidadVel2 = parseFloat(document.getElementById("Uvelocidad2").value.replace(",","."));
    
    velocidad1 = parseFloat(document.getElementById("vel-uno").value.replace(",","."));
    velocidad2 = parseFloat(document.getElementById("vel-dos").value.replace(",","."));
    posicion1 = parseFloat(document.getElementById("pos-uno").value.replace(",","."));
    posicion2 = parseFloat(document.getElementById("pos-dos").value.replace(",","."));


    //si la unidad es distinta a km, o km/h, llamo a la funcion convertirUnidades
    if(unidadPos1 != "km"){
        posicion1= convertirUnidades(posicion1, unidadPos1);
    }
    if (unidadPos2 != "km"){
       posicion2 = convertirUnidades(posicion2, unidadPos2);
    }
    if(unidadVel1 != "km/h"){
        velocidad1 = convertirUnidades(velocidad1, unidadVel1);
    }
    if(unidadVel2 != "km/h"){
        velocidad2 =convertirUnidades(velocidad2, unidadVel2);
    }


    var op = document.getElementById("opcion").value;
    var tiempo;

    tiempo = (posicion1 - posicion2) / (velocidad2 - velocidad1);
    tiempo = tiempo * 3600;
    distancia = posicion1 + velocidad1 * Number(tiempo);
    
    //dependiendo de la opcion elegida, muestra el dato correspondiente
    
    if(op == "DISTANCIA") {
        document.getElementById("resultado").value = distancia + "m";
    }

    if(op == "TIEMPO")
    {
        document.getElementById("resultado").value = tiempo + "s";
    }

}


function dibujar() {

    var myCanvas = document.getElementById("fondovideo");
    var calle = myCanvas.getContext("2d");
    var a1 = myCanvas.getContext("2d");
    var a2 = myCanvas.getContext("2d");
    var centerY = myCanvas.height / 2;
    var auto1 = new Image(100,20);
    var auto2 = new Image(200,20);
    auto1.src = "Imagenes/auto.jpg";
    auto2.src = "Imagenes/auto2.jpg";


    var x1 = 0;
    var x2 = posicion2*0.8 - posicion1*0.8;


    function animar(){

        myCanvas.width = myCanvas.width;
        // dibujo el auto 1
        a1.beginPath();
        a1.drawImage(auto1,x1,centerY-(auto1.height/2));
        a1.stroke();
        //dibujo el auto 2
        a2.beginPath();
        a2.drawImage(auto2,x2,centerY-(auto2.height/2));
        a2.stroke();


        // dibujo la calle
        calle.moveTo(0,centerY+30);
        calle.lineTo(700,centerY+30);
        calle.stroke();
        
        x1 += velocidad1*0.05;
        x2 +=velocidad2*0.05;

        if( x1 >= x2-100){
            clearInterval(id);
        }

    }

    var id = setInterval(animar, 10);
}


