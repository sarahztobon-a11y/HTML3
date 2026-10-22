function calcular() {
  let valor = parseInt(document.getElementById("valor").value);
  let hora = parseInt(document.getElementById("hora").value);
  let salario = valor * hora;

  if (hora > 8) {
    salario = salario * 1.25; 
  }

  document.getElementById("salario").value = salario.toLocaleString();
}