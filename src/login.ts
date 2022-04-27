let usuario: string = "melina";
let clave: string = "clave123";
let usuarioIngresado: string = prompt("usuario");
let claveIngresada: string = prompt("clave");

if (usuario === usuarioIngresado && clave === claveIngresada) {
  console.log("Bienvenido");
} else {
  console.log("El usuario o la clave son incorrectos");
}
