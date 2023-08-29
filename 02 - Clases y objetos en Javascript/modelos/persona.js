export default class Persona {
  nombre;
  apellido;
  edad;
  profesion;

  constructor(nombre, apellido, edad, profesion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;
  }

  mostrarPersona() {
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Profesion: ${this.profesion}`);
  }

  saludar() {
    alert(
      `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  }
}
