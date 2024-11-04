let campoCalculo = "";
let resultado = 0;

function digitar(digito) {
    campoCalculo += `${digito} `;
    document.getElementById("campoCalculo").value = campoCalculo;
}

function calcular() {
    resultado = eval(campoCalculo);
    document.getElementById("campoCalculo").value = resultado;
}

function limpar() {
    campoCalculo = "";
    document.getElementById("campoCalculo").value = "";
}