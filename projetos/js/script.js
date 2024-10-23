
function calcular(operador) {

    let num1 = document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value;
    let resultado = 0;

    // Protegendo de Nulidade
    num1 = num1 == "" ? 0 : parseFloat(num1);
    num2 = num2 == "" ? 0 : parseFloat(num2);

    if(operador === '+') {
        resultado = num1 + num2;
    } else if(operador === '-'){
        resultado = num1 - num2;
    } else if(operador === 'x'){
        resultado = num1 * num2;
    } else if(operador === '/'){
        if(num2 === 0) {
            document.getElementById("resultado").innerHTML = 
                "Divisão por Zero não permitida!";
            return;
        }
        resultado = parseFloat((num1 / num2).toFixed(4));
    } else if(operador === 'potencia') {
        resultado = num1 ** num2;
    } else if(operador === 'c') {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("resultado").innerHTML = 0;

        return;
    }

    document.getElementById("resultado").innerHTML = resultado;
}