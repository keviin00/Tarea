/* funcion 

function saludar(){
    console.log("Esto es una funcion");
}


saludar();*/

/* Funcion Pedir nombres
function Pname(){ 
let name = prompt("Ingrese su nombre")
console.log(`su nombre es ${name}`);
}


Pname();
Pname();*/
/* login funcion
function login(){
    const usr = "kevin"
    const pass = "123456"

   let pedir = prompt("Ingrese su usuario");
   let pedir2 =prompt("ingrese su contraseña");

    if((usr==pedir) && (pass==pedir2))
    {
        console.log(`inicio sesion correctamente ${usr}`);
    }else{console.log("Usuario o contraseña incorrecto");}
}

login();*/
/* aprendiendo parametros
function conParametro  (Parametro1,Parametro2){
console.log(Parametro1+" "+ Parametro2);
}
conParametro("hola","casa")*/
/*
let resultado = 0;

function suma(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
function mostrar(mensaje) {
    console.log(mensaje)
}
suma(6, 3);            
mostrar(resultado); */

/*calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}console.log(calculadora(10, 5, "*"));*/
/*calculos 
const suma = function(a, b ){return a+b}
const resta = function(a, b ){return a-b}
const div = function(a, b){return a/b}
const mult = function(a, b){return a*b}
 a =parseInt(prompt("Ingrese un primero numero"));
 b =parseInt(prompt("Ingrese un segundo numero"));

 console.log(suma(a,b));
 console.log(resta(a,b));
 console.log(div(a,b));
 console.log(resta(a,b));
 */
 /*
 const suma  = (a,b) => a + b
 const resta = (a,b) => a - b
 //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
 const iva   = x => x * 0.21
 let precioProducto  = 600
 let descuento = precioProducto/50
 //Calculo el precioProducto + IVA - descuento
 let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
 console.log(nuevoPrecio);
 console.log(descuento);
 */


const memoria = 17500
const fuente  = 53341
const motherboard = 40000
const disk = 15000
const procs = 70000
const gabinete = 25000

let productos = [];
let entrada
let aux 

do{
    entrada = prompt(`ingrese un producto o ponga "salir"`);
    aux = entrada.toLowerCase();
    if (aux !== "salir"){
        productos.push(entrada);
        console.log(productos);
    }
}while(aux !=="salir");
console.log("gracias por venir");

