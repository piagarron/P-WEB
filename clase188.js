//1. Ejercicio 1: Función Declarada
//Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. 
// Llama a la función con diferentes valores e imprime el resultado.
let num = function numeros (num1,num2,num3){
    if (num1 > num2 && num3){
        mayor = num1
    }else if (num2>num1 && num3) {
    mayor = num2
    }else  {
        mayor = num3
    }
    return("El mayor es:" + mayor)
}
//hola
console.log(num(20,14,3))


//2. Ejercicio 2: Función Expresada
//Crea una función expresada que reciba un array de strings y retorne un string que concatena
//  todos los elementos del array separados por espacios.
//const array1 = ["Hola", "soy" , "Pia"]
//function concatenar(arr){
    //return arr.join(" ")
//}

//console.log(concatenar(array1))


//3. Ejercicio 3: Función Flecha
//Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una validación
//  para que, si el array está vacío, retorna un mensaje de advertencia.
const array1 = ["Hola", "soy" , "Pia"]
let concatenar = arr => arr.join(" ");
if (array1.length === 0) {
console.log("El array esta vacio")
} else{
    console.log(concatenar(array1))
}

//4. Ejercicio 4: Estructura If-Else
//Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva un mensaje
//  que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).
function grados(temperatura){
    if (temperatura < 15){
        console.log("Hace frio")
    } else if (temperatura >= 15 && temperatura < 25 ){
        console.log("Esta templado")
    }
    else{
        console.log("Hace calor")
    }

}
console.log(grados(19))


//5. Ejercicio 5: Operador Ternario
//Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si 
// es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, 
// utilizando operadores ternarios.
function hora(horario){
    console.log(horario < 12 ? "Buenos dias":
    horario >= 12 && horario <= 18 ? "Buenas tardes":"Buenas noches")
}
hora(6)


//6. Ejercicio 6: Operadores And y Or
//Escribe una función que reciba cuatro argumentos booleanos y retorne true si al
//  menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.
function verificar(arg1,arg2,arg3,arg4){
    if ((arg1 || arg2 === true) && (arg3 || arg4 === false)){
        return "True"
    }

}
console.log(verificar(10 > 4, 3 > 5, 20 < 40, 30 > 2))          //NO ENTENDI


//7. Ejercicio 7: Función que Calcula el Factorial
//Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una 
// estructura if para manejar el caso base.
function factorial(numero){
    if (numero === 0 || numero === 1){
        return 1
    }else { return numero * factorial(numero - 1)

    }
}
console.log(factorial(5))


//8. Ejercicio 8: Función con Parámetros por Defecto
//Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".
function saludar(nombre){
    if (nombre){
        return "Hola, " + nombre
    }else{
        return "Hola, invitado"
    }
}
console.log(saludar("Pia"))


//9. Ejercicio 9: Función que Verifica Números Pares
//Escribe una función que tome un número y retorne true si es par o false si es impar. 
// Utiliza el operador módulo (%) y un operador ternario.
function verificar(numero){
let par = (numero % 2 === 0) ? true: false;
return par;
}
console.log(verificar(4))

//10. Ejercicio 10: Uso de switch
//Escribe una función que reciba un día de la semana (en número) y 
// retorne el nombre del día. Usa una estructura switch.
function verificar(dia) {
    switch (dia) {
      case 0:
        return "Domingo";
      case 1:
        return "Lunes";
      case 2:
        return "Martes";
      case 3:
        return "Miércoles";
      case 4:
        return "Jueves";
      case 5:
        return "Viernes";
      case 6:
        return "Sábado";
      default:
        return "Día inválido";
    }
  }
  
console.log(verificar(6))


//11. Ejercicio 11: Función Recursiva
//Crea una función recursiva que calcule la suma de los números de 1 hasta n.
function recursiva(numero) {
    
    if (numero === 1) {
      return 1;
    } else {
      
      return numero + recursiva(numero - 1);
    }
  }
  
  console.log(recursiva(3))
  

//12. Ejercicio 12: Validación con Operadores Lógicos
//Escribe una función que verifique si una contraseña cumple con ciertos criterios: al 
// menos 8 caracteres, contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar 
// las condiciones
function verificar(contrasena){
    if (contrasena.length >= 8 &&  /\d/.test(contrasena) && /[A-Z]/.test(contrasena)){
        return true;
    } else{
        return false;
    }
    
}

console.log(verificar("Holacomoestas123"))