export default class Libro {
  titulo;
  autor;
  año;

  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }

  mostrarDetalles() {
    alert(
      `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`
    );
  }
}
