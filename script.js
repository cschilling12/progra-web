console.log("hola mundo")

/*
a = 1
b = 2
*/

let a = 1;
//declarando una variable
let b = 2;

a = 5;
//modificando una variabñe

//Number = integer y float (enteros y decimales)

//string = cadena de caracteress
let nombre = "Catalina";

//boolean = veradero o falso
let profesorActivo = true;

//Cuentas
console.log(a+b)
//el console.log funciona como un print()

/* Operadores matemáticos
+ Suma - Ademas de sumar, CONCATENA
- Resta
/ División cociente
* Multiplicación
% División resto
** Potencia 
*/

console.log(2**3)
console.log(11%2)

//print ("Hola" + 1)
console.log("hola" + 1)
console.log("hola" - 1)
//NaN: Not A Number

console.log("11" + 1)
//111 o 12 --> 111

console.log("11"-1)
//error o 10 --> 10


/*
Operadores lógicos
== igualdad debil (valor)
!= distinto (valor)
> mayor
>= mayor o igual
< menor
<= menor o igual
=== igualdad estricta (valor y tipo de dato)
!==diferencia estricta (valor y tipo de dato)
*/

console.log(10>9)
//True
console.log(10==10)
//True
console.log(10=="10")
//True
console.log(10==="10")
//False, se recomienda usar la compraracion estricta
console.log(10!=="10")
//True

/*
JAVA != JAVASCRIPT
Paradigmas:
- Programación Orientada a Objetos : POO : JAVA
- Programación Lógica : ProLog
- Programación Lineal : C
- Programación Funcional : JavaScript
¿Python? --> Multi-paradigma
*/

function saludar(){console.log("Hola")}

function sumar(){console.log(a+b)}
sumar()

function sumar2(valor1, valor2){console.log(valor1+valor2)}
sumar2(1,2)
//parametro es un comodín

function esPar(numero){console.log(numero%2 === 0)}
esPar(10)
esPar(11)

function consologear(resultado){console.log(resultado)}

function esImpar(numero){return(numero%2===1)}
consologear(esImpar(11))

function IMC(peso, altura){return peso/(altura**2)}
consologear(IMC(87, 1.75))

const PI = 3.1415
// en general las constantes se delcaran en mayuscula

/*
camelCase : sumar_iva <<<< este es el que usamos
snake_case : sumar_iva
kebab-case : sumar-iva
l33t : sum4r_1v4
PascalCase : SumarIva

*/

/*
&& and
|| or
! not
*/

console.log(10==10 && 11==11)

//Array --> es como una lista, guadra variables adentro
// Los arrays se miden con los indices
let Array = [1,2,3,4]
console.log(Array[0])

console.log(Array[3]*2)
Array[3] = Array[3]*2
// El primero te muestra el numero 8 y en el segundo se modifica la variable. 

console.log()
// el console es una clase/objeto(si es 1), el .log() es un método.

//const Array = [];

Array.push(1)
// agrega una variable al final del array

Array.unshift(2)
//agrega una variable al principio del array

Array.pop()
//saca el utimo de la lista

Array.shift()
// saca el primero de la lista

let estudiante= {
    nombre:"chiara", 
    edad:19,
    activo:true
}
console.log(estudiante)


const estudiantes = [estudiante1 = {nombre:"cata",}, estudiante2 = {nombre: "santiago",}, estudiante3 = {nombre: "lautaro",}]
console.log(estudiantes[2].nombre)

let profesor = {nombre: "esteban", edad: 30, actividad: true,}
let profesorString = JSON.stringify(profesor)
let profesorObjeto = JSON.parse(profesorString)






















