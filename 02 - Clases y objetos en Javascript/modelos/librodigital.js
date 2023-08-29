import Libro from "./libro.js";

export default class LibroDigital extends Libro {
  formato;

  constructor(titulo, autor, año, formato) {
    super(titulo, autor, año);
    this.formato = formato;
  }

  mostrarFormato() {
    alert(`El formato del libro es ${this.formato}`);
  }
}
