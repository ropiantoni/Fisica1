
/**
 * @fileoverview Libreria Js Para problemas de encuentro
 * @author Piantoni & Bertorello
 * @version 0.1
 */

/**
 * Comprueba que los valores ingresados sean Numéricos, sino, envia mensaje al usuario yblanquea el campo de texto
 * @method comprobarNum
 * @param valorIngreso, valor ingresado que puede ser altura, masa, distancia o Indice de Rozamiento
 * @param nombreParametro, que puede ser altura, masa, distanciaFreno o CoeficienteRozamiento
 */
function comprobarNum(valorIngreso, nombreParametro) {
    if (isNaN(valorIngreso)) {
        alert("Valor ingresado no numerico, ingresar de nuevo.");

        var el = document.getElementById("calculos").elements;
        el[nombreParametro].value = "";
    }
}   

function cargaValores (){
   var el= document.getElementById("valores").elements;
    var url=el["opcion"].value+ "#"+ el["vel1"].value + "#" + el["vel2"].value + "#" + el["acel1"].value + "#" + el["acel2"].value ;
    window.location.replace(url);
}

function calculo (){
    var el= document.getElementById("valores").elements;
    var url=el["opcion"].value+ "#"+ el["vel1"].value + "#" + el["vel2"].value + "#" + el["acel1"].value + "#" + el["acel2"].value ;


    var arreglo = url.hash.split("#"); //QUIERO HACER UN ARREGLO SEPARANDO LOS HASH DE LA VARIABLE URL!!! COMO HAGO???
    var op = arreglo[0];
    var velocidad1 = arreglo[1];
    var velocidad2 = arreglo[2];
    var aceleracion1 =arreglo[3];
    var aceleracion2 = arreglo[4];

    alert(op);

    if(op == "DISTANCIA") {
        resultado = 9; //poner Formula!!
        document.getElementById("resultado").value = resultado;
    }
}