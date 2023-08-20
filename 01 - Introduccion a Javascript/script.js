/* CONEXION CON DOM */
document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let btn5 = document.getElementById("btn5");
  let btn6 = document.getElementById("btn6");
  let btn7 = document.getElementById("btn7");
  let btn8 = document.getElementById("btn8");
  let btn9 = document.getElementById("btn9");
  let btn10 = document.getElementById("btn10");
  let btn11 = document.getElementById("btn11");
  let btn12 = document.getElementById("btn12");
  let btn13 = document.getElementById("btn13");
  let btn14 = document.getElementById("btn14");
  let btn15 = document.getElementById("btn15");

  btn1.addEventListener("click", () => {
    wrapper1();
  });

  btn2.addEventListener("click", () => {
    wrapper2();
  });

  btn3.addEventListener("click", () => {
    wrapper3();
  });

  btn4.addEventListener("click", () => {
    wrapper4();
  });

  btn5.addEventListener("click", () => {
    wrapper5();
  });

  btn6.addEventListener("click", () => {
    wrapper6();
  });

  btn7.addEventListener("click", () => {
    wrapper7();
  });

  btn8.addEventListener("click", () => {
    wrapper8();
  });

  btn9.addEventListener("click", () => {
    wrapper9();
  });

  btn10.addEventListener("click", () => {
    wrapper10();
  });

  btn11.addEventListener("click", () => {
    wrapper11();
  });

  btn12.addEventListener("click", () => {
    wrapper12();
  });

  btn13.addEventListener("click", () => {
    wrapper13();
  });

  btn14.addEventListener("click", () => {
    wrapper14();
  });

  btn15.addEventListener("click", () => {
    wrapper15();
  });
});
/* ************************ */

/* LLAMADOS A FUNCIONES */
//setTimeout(wrapper1, 1000);
//setTimeout(wrapper2, 1000);
//setTimeout(wrapper3, 1000);
//setTimeout(wrapper4, 1000);
//setTimeout(wrapper5, 1000);
//setTimeout(wrapper6, 1000);
//setTimeout(wrapper7, 1000);
//setTimeout(wrapper8, 1000);
//setTimeout(wrapper9, 1000);
//setTimeout(wrapper10, 1000);
//setTimeout(wrapper11, 1000);
//setTimeout(wrapper12, 1000);
//setTimeout(wrapper13, 1000);
//setTimeout(wrapper14, 1000);
//setTimeout(wrapper15, 1000);
/* ************************ */

function wrapper1() {
  let edad = prompt("Ingresa una edad: ");
  resolucion1(edad);
}

function resolucion1(edad) {
  if (edad >= 18) {
    alert("Es mayor de edad");
  } else {
    alert("Es menor de edad");
  }
}

function wrapper2() {
  let nota = prompt("Ingrese una nota: ");
  resolucion2(nota);
}

function resolucion2(nota) {
  if (nota >= 0 && nota <= 3) {
    alert("Muy deficiente");
  } else if (nota >= 4 && nota <= 5) {
    alert("Insuficiente");
  } else if (nota >= 6 && nota <= 7) {
    alert("Bien");
  } else if (nota >= 8 && nota <= 9) {
    alert("Notable");
  } else if (nota == 10) {
    alert("Sobresaliente");
  } else {
    alert("Nota no válida");
  }
}

function wrapper3() {
  let nombreMayor = null;
  let edadMayor = null;
  for (let i = 1; i <= 3; i++) {
    let nombreAux = prompt(`Ingresa un nombre (${i}):`);
    let edadAux = prompt(`Ingrese una edad (${i}):`);

    if (edadMayor == null || edadAux > edadMayor) {
      edadMayor = edadAux;
      nombreMayor = nombreAux;
    }
  }
  alert(`El mayor es ${nombreMayor} con ${edadMayor} años`);
}

function wrapper4() {
  let palabra = prompt("Ingrese una palabra: ");
  alert(palabra.toUpperCase());
}

function wrapper5() {
  let piramide = "";
  for (let i = 1; i <= 30; i++) {
    let aux = `${i}`.repeat(i);
    piramide += aux + "\n";
  }
  console.log(piramide);
  alert("Revisar consola");
}

function wrapper6() {
  for (let i = 1; i <= 500; i++) {
    if (i % 4 == 0 || i % 9 == 0) {
      console.log(i);
    }
  }

  alert("Revisar consola");
}

function wrapper7() {
  let condition = true;
  let acumulador = 0;
  do {
    let numero = prompt("Ingrese un número: ");
    if (numero != 0) {
      acumulador += parseInt(numero);
    } else {
      condition = false;
    }
  } while (condition);

  alert(`La suma de los números ingresados es: ${acumulador}`);
}

function wrapper8() {
  let condition = true;
  let output = "";
  do {
    let palabra = prompt("Ingrese una palabra: ");
    if (palabra != "fin") {
      output += palabra + "-";
    } else {
      condition = false;
    }
  } while (condition);

  alert(output);
}

function wrapper9() {
  let vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;

  let texto = prompt("Ingrese un texto: ");

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  alert(`El texto ingresado tiene ${contador} vocales`);
}

function wrapper10() {
  let texto = prompt("Ingrese un texto: ");
  let textoInvertido = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  alert(textoInvertido);
}

function wrapper11() {
  let radio = prompt("Ingrese el radio de un círculo: ");
  let area = Math.PI * Math.pow(radio, 2);
  alert(`El área del círculo es: ${area}`);
}

function wrapper12() {
  let numero = prompt("Ingrese un número: ");
  numero = parseFloat(numero);

  if (numero > 0) {
    alert("El número es positivo");
  } else if (numero < 0) {
    alert("El número es negativo");
  } else {
    alert("El número es cero");
  }
}

function wrapper13() {
  let arreglo = [];

  do {
    let nombre = prompt("Ingrese un nombre (0 para parar): ");
    if (nombre != "0") {
      arreglo.push(nombre);
    } else {
      break;
    }
  } while (true);

  alert(`El arreglo tiene ${arreglo.length} elementos, son: ${arreglo}`);
}

function wrapper14() {
  let arreglo = [];

  do {
    let nombre = prompt("Ingrese un numero (0 para parar): ");
    if (nombre != "0") {
      arreglo.push(parseFloat(nombre));
    } else {
      break;
    }
  } while (true);

  let minimo = Math.min(...arreglo);
  let maximo = Math.max(...arreglo);

  alert(`El maximo es ${maximo} y el minimo es ${minimo}`);
}

function wrapper15() {
  let frase = prompt("Ingrese una frase: ");
  let arreglo = frase.split(" ");
  alert(`La frase tiene ${arreglo.length} palabras`);
}
