function calcular() {

  let inputs = document.querySelectorAll("form input");

  let nota1 = parseFloat(inputs[0].value);
  let nota2 = parseFloat(inputs[1].value);
  let nota3 = parseFloat(inputs[2].value);

  if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
    alert("Las notas deben estar entre 0 y 5.");
    return;
  }

  let promedio = (nota1 + nota2 + nota3) / 3;

  inputs[3].value = promedio.toFixed(2);
}