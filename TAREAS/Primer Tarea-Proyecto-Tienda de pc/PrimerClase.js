let Nombre1 = prompt("Ingresa un Nombre");
// let SalidaN = "El nombre ingresado es"+" "+Nombre1;
var Nombre = Nombre1;
//alert(SalidaN);

let Apellido1 = prompt("Ingrese el apellido");
//let SalidaA = "El apellido ingresado es" + " "+ Apellido;
var Apellido = Apellido1;
//alert(SalidaA);

console.log("El Usuario es"+ " "+Nombre+" "+Apellido);


let NumeroA = parseInt(prompt("Ingrese un numero"));
var PrimerPrecio = NumeroA;

let NumeroB = parseInt(prompt("Ingrese un Segundo numero"));
var SegundoPrecio = NumeroB;

var ResultadoSuma = PrimerPrecio + SegundoPrecio;
var ResultadoResta = PrimerPrecio - SegundoPrecio;
var ResultadoMult = PrimerPrecio * SegundoPrecio;
var ResultadoDiv = PrimerPrecio / SegundoPrecio;

console.log(`el resultado de la suma es ${ResultadoSuma}`);
console.log(`el resultado de la Resta es ${ResultadoResta}`);
console.log(`el resultado de la Mult es ${ResultadoMult}`);
console.log(`el resultado de la Div es ${ResultadoDiv}`);
