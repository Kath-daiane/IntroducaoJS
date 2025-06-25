function somar () {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + soma;
   
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}