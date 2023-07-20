// 2) Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".


const ingresarNumero= prompt("ingrese su número de teléfono celular")

let acc=0

for ( let i=0; i< ingresarNumero.length; i++ ){
    if (ingresarNumero[i]=== "0" || ingresarNumero[i]=== "1" ||ingresarNumero[i]==="e" ||ingresarNumero[i]==="2" ||ingresarNumero[i]==="3" ||ingresarNumero[i]==="4" || ingresarNumero[i]=== "5" ||ingresarNumero[i]==="6" ||ingresarNumero[i]==="7" ||ingresarNumero[i]==="8" ||ingresarNumero[i]==="9"){
        acc=acc+1
}
} if (acc===10) {
    alert("Su teléfono ingresado es válido")
} else {
    alert ("Su teléfono ingresado es inválido")
}
