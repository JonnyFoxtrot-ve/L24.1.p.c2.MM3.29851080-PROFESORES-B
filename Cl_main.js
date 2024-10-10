import cl_contratado from "./Cl_contratado.js";

export default class Cl_main {
  constructor() {
    let contratado1 = new cl_contratado("Rafael", 30, 15);
    let contratado2 = new cl_contratado("Felicia", 30, 20);

    //Salida para primer profesor contratado
    document.getElementById(
      "salida"
    ).innerHTML += `<br>Nombre del profesor fijo: ${
      contratado1.nombre
    }<br><br> Monto del bono: $${contratado1.bono}<br><br> Cantidad de horas: ${
      contratado1.horas
    }<br><br> Ingreso total: $${contratado1.ingresoTotal()}<br>`;

    //Segunda salida para segundo profesor contratado
    document.getElementById(
      "salida"
    ).innerHTML += `<br>Nombre del profesor fijo: ${
      contratado2.nombre
    }<br><br> Monto del bono: $${contratado2.bono}<br><br> Cantidad de horas: ${
      contratado2.horas
    }<br><br> Ingreso total: $${contratado2.ingresoTotal()}<br>`;
  }
}
