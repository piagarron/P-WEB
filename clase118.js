
//1. Declaración de Variables
let ciudad = "Salta Capital";
let pais = "Argentina";
let edad = "19"


prueba// Imprime las variables

//2. Declara tres variables numéricas. Calcula el promedio de las tres y encuentra 
//el residuo de la división de la suma total entre 2. Imprime los resultados.
let numero1 = 4
let numero2 = 60
let numero3 = 100

let promedio = (numero1 + numero2 + numero3)

console.log(promedio/3)
console.log((numero2 + numero3)%2)

//3. Declara una variable para almacenar un objeto que represente un 
// coche con propiedades como marca, modelo y año. Imprime el tipo
//  de cada propiedad con typeof.

let coche = {
    marca: "Toyota",
    modelo: "SW4",
    anio : 2020,
    }
    
    console.log(coche.marca, coche.modelo, coche.anio )


//4. Crea un array con los nombres de 5 ciudades que te gustaría visitar. 
// Reemplaza el tercer elemento por otra ciudad y luego imprime el array 
// actualizado.

const ciudades = ["Tokio", "Praga", "Estocolmo", "Lima","Seul"]
ciudades[2] = "Buenos Aires"
console.log(ciudades)


//5. Crea un array de 3 objetos que representen películas, cada una con título,
//director y año de lanzamiento. Imprime el director de la última película.

let pelicula_uno = {titulo:"Mamma Mia", director:"Phyllida Lloyd", anio:2008}

let pelicula_dos = {titulo:"Un viernes de locos", director:"Mark Waters", anio:2003}

let pelicula_tres = {titulo:"El gran showman", director:"Michael Gracey", anio:2017}

const peliculas = [pelicula_uno, pelicula_dos, pelicula_tres]
console.log(peliculas[2].director)




//6. Declara tres variables booleanas y usa operadores lógicos para 
// verificar si al menos dos son verdaderas. Imprime true o false en
//la consola dependiendo del resultado. 
let x = 1
let y = 5
let z = 25                      //???????

console.log(x > y && y < z)




//7. Declara tres variables numéricas. Compara si el primer número es 
// mayor que el segundo y menor que el tercero. Luego, verifica si el
//  segundo número es distinto al tercero. Imprime los resultados de las 
// comparaciones.

let a = 19
let b = 9
let c = 15
console.log(a > b && a < c)     //TOMA SOLO LO PRIMERO???
console.log(b != c)



//8. Declara dos variables que almacenen strings (por ejemplo,
//  tu nombre y tu apellido). Luego, crea una tercera variable que 
// concatene las dos primeras y muestra el resultado en la consola.
let nombre = "Pia"
let apellido = "Garron"
let nombreCompleto = nombre + " " + apellido 
console.log(nombreCompleto)


//9. Declara una variable numérica y utiliza los operadores de 
// incremento (++) y decremento (--) para modificar su valor. Imprime
// el valor de la variable después de cada operación.
let p = 118
console.log(p++) //??????


//10. Crea un objeto que represente un estudiante con propiedades
//  como nombre, edad y carrera. Accede e imprime cada propiedad del objeto.

let estudiante = {nombre: "Pia", edad: 19, carrera: "Negocios"}
console.log(estudiante.nombre, estudiante.edad, estudiante.carrera)

//11. Crea un array que contenga dos arrays internos, cada uno con 3 números.
// Accede al segundo elemento del primer array interno.


//12. Declara dos variables numéricas y utiliza los operadores 
// >, <, >=, <=, ===, !== para comparar sus valores. Imprime el
// resultado de cada comparación.

//13. Declara una variable sin asignarle un valor y otra 
// variable con valor null. Utiliza typeof para imprimir el tipo
// de cada variable.

//14. Declara una variable que almacene un número como
//  string (por ejemplo, "123"). Convierte este string a un número usando 
// parseInt o Number y demuestra que ahora puedes realizar operaciones
// matemáticas con él.





