function calcular() {
  let invitados = parseFloat(document.getElementById("invitados").value);

  if (!invitados || invitados <= 0) {
    alert("Por favor ingresa un número de invitados válido mayor a 0.");
    return;
  }

  let costoComida = parseFloat(document.getElementById("costoComida").value);
  let costoBebida = parseFloat(document.getElementById("costoBebida").value) ;
  let decoracion = parseFloat(document.getElementById("decoracion").value);
  let musica = parseFloat(document.getElementById("musica").value);
  let porcentajePropina = parseFloat(document.getElementById("propinaPorcentaje").value);

  let comidaTotal = invitados * costoComida;
  let bebidaTotal = invitados * costoBebida;
  let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
  let propina = subtotal * (porcentajePropina / 100);
  let totalGeneral = subtotal + propina;
  let costoPorInvitado = totalGeneral / invitados;


  document.getElementById("resComida").textContent = comidaTotal.toLocaleString('es-CO');
  document.getElementById("resBebida").textContent = bebidaTotal.toLocaleString('es-CO');
  document.getElementById("resDecoracion").textContent = decoracion.toLocaleString('es-CO');
  document.getElementById("resMusica").textContent = musica.toLocaleString('es-CO');
  document.getElementById("resSubtotal").textContent = subtotal.toLocaleString('es-CO');
  document.getElementById("resPropina").textContent = propina.toLocaleString('es-CO');
  document.getElementById("resTotal").textContent = totalGeneral.toLocaleString('es-CO');
  document.getElementById("resPorInvitado").textContent = costoPorInvitado.toLocaleString('es-CO');
}