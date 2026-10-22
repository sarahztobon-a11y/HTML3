function calcular() {
  let inputs = document.querySelectorAll("form input");

  let cantidad = parseFloat(inputs[1].value);
  let precioUnitario = parseFloat(inputs[2].value);

  let subtotal = cantidad * precioUnitario;

  let descuento = 0;
  if (cantidad > 10) {
    descuento = subtotal * 0.05;
  }

  let iva = subtotal * 0.19;

  let totalPagar = (subtotal - descuento) + iva;

  inputs[3].value = subtotal.toLocaleString('es-CO');
  inputs[4].value = iva.toLocaleString('es-CO');
  inputs[5].value = descuento.toLocaleString('es-CO');
  inputs[6].value = totalPagar.toLocaleString('es-CO');
}