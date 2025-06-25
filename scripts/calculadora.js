function somar () {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + soma;

}

function subtrair() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let subtracao = num1 - num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + subtracao;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let multiplicacao = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + multiplicacao;
}

function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (num2 === 0) {
        document.getElementById("resultado").innerHTML = "Erro: divisão por zero!";
    } else {
        let divisao = num1 / num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + divisao;
    }
}