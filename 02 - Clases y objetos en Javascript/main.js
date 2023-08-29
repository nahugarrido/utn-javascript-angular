import Persona from "./modelos/persona.js"; // Ajusta la ruta según tu estructura de carpetas
import Libro from "./modelos/libro.js";
import LibroDigital from "./modelos/librodigital.js";
import Superheroe from "./modelos/superheroe.js";

document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let btn5 = document.getElementById("btn5");
  let btn6 = document.getElementById("btn6");
  let btn7 = document.getElementById("btn7");
  let btn8 = document.getElementById("btn8");

  btn1.addEventListener("click", () => {
    funcion1();
  });

  btn2.addEventListener("click", () => {
    funcion2();
  });

  btn3.addEventListener("click", () => {
    funcion3();
  });

  btn4.addEventListener("click", () => {
    funcion4();
  });

  btn5.addEventListener("click", () => {
    funcion5();
  });

  btn6.addEventListener("click", () => {
    funcion6();
  });

  btn7.addEventListener("click", () => {
    funcion7();
  });

  btn8.addEventListener("click", () => {
    funcion8();
  });
});

function funcion1() {
  const persona = new Persona("Juan", "Perez", 30, "Programador");
  persona.mostrarPersona();
}

function funcion2() {
  const titulo = prompt("Ingrese el titulo del libro");
  const autor = prompt("Ingrese el autor del libro");
  const año = prompt("Ingrese el año del libro");
  const libro = new Libro(titulo, autor, año);
  libro.mostrarDetalles();
}

function funcion3() {
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  const edad = prompt("Ingrese su edad");
  const profesion = prompt("Ingrese su profesion");
  const persona = new Persona(nombre, apellido, edad, profesion);
  persona.saludar();
}

function funcion4() {
  const nombre = prompt("Ingrese el nombre del superheroe");
  const poder = prompt("Ingrese el poder del superheroe");
  const plan = prompt("Ingrese el plan del superheroe");
  const superheroe = new Superheroe(nombre, poder, plan);
  superheroe.presentarse();
  superheroe.amenazar();
}

function funcion5() {
  const titulo = prompt("Ingrese el titulo del libro");
  const autor = prompt("Ingrese el autor del libro");
  const año = prompt("Ingrese el año del libro");
  const formato = prompt("Ingrese el formato del libro");
  const libroDigital = new LibroDigital(titulo, autor, año, formato);
  libroDigital.mostrarDetalles();
  libroDigital.mostrarFormato();
}

function funcion6() {
  const nombres = ["Juan", "Pedro", "Maria", "Jose", "Luis"];

  const nombresMayuscula = nombres.map((nombre) => nombre.toUpperCase());

  alert(nombresMayuscula);
}

function funcion7() {
  let aBuscar = prompt("Ingrese el numero a buscar");
  aBuscar = parseInt(aBuscar);

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numeroBuscado = numeros.find((numero) => numero === aBuscar);
  if (numeroBuscado != null) {
    alert(`El numero ${numeroBuscado} se encuentra en el array`);
  } else {
    alert(`El numero ${aBuscar} no se encuentra en el array`);
  }
}

function funcion8() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numeros = numeros.filter((numero) => numero % 2 === 0);

  alert(numeros);
}
