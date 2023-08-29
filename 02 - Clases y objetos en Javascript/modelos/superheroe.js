export default class Superheroe {
  nomber;
  poder;
  plan;

  constructor(nombre, poder, plan) {
    this.nombre = nombre;
    this.poder = poder;
    this.plan = plan;
  }

  presentarse() {
    alert(`Hola, soy ${this.nombre} y mi poder es ${this.poder}`);
  }

  amenazar() {
    alert(`El plan del villano es ${this.plan}`);
  }
}
