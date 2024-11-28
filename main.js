console.log("Hola mundo");

let nombre = "Alexander";
let edad = 23;
let Es_Estudiante = "si";
let nombreH1 = document.createElement("h1");
let edadH1 = document.createElement("h1");
let estudianteh1 = document.createElement("h1");

console.log("nombre",nombre);
console.log("edad",edad);
console.log("Es estudiante?",Es_Estudiante);

nombreH1.textContent = "Nombre: " + nombre;
edadH1.textContent = "edad: " + edad;
estudianteh1.textContent = "Es estudiante? " + Es_Estudiante;

document.body.appendChild(nombreH1);
document.body.appendChild(edadH1);
document.body.appendChild(estudianteh1);