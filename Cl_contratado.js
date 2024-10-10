import { Cl_profesor } from "./Cl_profesor.js";

export default class cl_contratado extends Cl_profesor {
  constructor(nombre, bono, horas) {
    super(nombre, bono);
    this.horas = horas;
  }
  set horas(horas) {
    this._horas = horas;
  }

  get horas() {
    return this._horas;
  }

  ingresoTotal() {
    return this.horas * 10 + this.bono;
  }
}
