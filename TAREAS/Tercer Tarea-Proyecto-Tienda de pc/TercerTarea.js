/* Tablas del 1 al 10
let ingresarNumero = parseInt(prompt("Ingresar un numero "));
var Number = ingresarNumero ;

for (let i = 1 ; i<=10; i++){
    let resultado = Number * i ;
    console.log(Number+"X"+i+"="+resultado);
}*/

/* Turnos segun DNi
for(let i = 1; i<=10; i++){
    let IngresarDNI = prompt("Ingresar DNI");
    var DNI = IngresarDNI;
    console.log("Turno N"+i+" "+DNI);
}*/


/*  corta el for cuando pasa por N 
for(let i=1; i<=10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}*/

/* se salte el numero ingresado
for(let i=1; i<=10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}*/

/* Inicio de sesion incorrecto
let Users = prompt ("Ingresar el nombre de usuario");
let Passwords = parseInt(prompt("Ingrese la contraseña"))
const User= {
    Name : "kevin",
    Pass : "123456"
}
while((Users != User.Name) || (Passwords != User.Pass))
{
    console.log("El nombre de usuario ingresado es incorrecto"+" :"+Users);
    console.log("la contraseña ingresada es incorrecto"+" :"+Passwords);

    Users = prompt ("Nombre de usuario o contraseña es incorrecta");
    Passwords = parseInt(prompt("Nombre de usuario o contraseña es incorrecta"));
    
}console.log("Bienvenido a nuestra pagina");
*/



/* do-while alt+91 
let comp = [];
let input
let aux
do {
  input = prompt(`ingrese un componente o escriba "jony puto"`);
  aux = input.toLowerCase();
  if (aux !== "jony puto") {
    comp.push(input);
    console.log(comp);

  }

} while (aux !== "jony puto");
console.log("tremendo puto");
*/

/* swich
let compt = prompt("Ingresa un producto");


switch (compt) {
  case "intel": console.log("Producto disponible");
    break;

  case "amd": console.log("Solo vendemos cosas de marca");
    break;

  case "ram": console.log("Producto disponible");
    break;
  case "fuente": console.log("Producto disponible");
  default:
    console.log("No se busco ningun producto");
    break;
}*/
