export class Cl_profesor {
  constructor(nombre, bono) {
    (this.nombre = nombre), (this.bono = bono);
  }

  set bono(bono) {
    this._bono = bono;
  }

  get bono() {
    return this._bono;
  }
}
