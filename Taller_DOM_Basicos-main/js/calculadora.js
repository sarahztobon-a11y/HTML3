function sumar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let suma = num1 + num2;
    document.getElementById("resultado").value = suma;
}

function restar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resta = num1 - num2;
    document.getElementById("resultado").value = resta;
}

function multiplicar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let multiplicacion = num1 * num2;
    document.getElementById("resultado").value = multiplicacion;
}

function dividir(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    if (num2 === 0) {
        document.getElementById("resultado").value = "No se puede dividir por 0";
    } else {
        let division = num1 / num2;
        document.getElementById("resultado").value = division;
    }
}