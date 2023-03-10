var resultado = ""
var resultado1 = ""
var resultado2 = ""
var resultado3 = ""
var resultado4 = ""
var resultado5 = ""
function calcularregrade3 () {
    var valor1, valor2, valor3

    valor1 = document.getElementById('valor1').value 
    valor2 = document.getElementById('valor2').value
    valor3 = document.getElementById('valor3').value

    resultado5 = resultado4;
    resultado4 = resultado3;
    resultado3 = resultado2;
    resultado2 = resultado1;
    resultado1 = resultado;
    

    resultado = (valor2 * valor3) / valor1

    document.getElementById('resultado').value = resultado 
    document.getElementById('resultado1').textContent = resultado
    document.getElementById('resultado2').textContent = resultado1
    document.getElementById('resultado3').textContent = resultado2
    document.getElementById('resultado4').textContent = resultado3
    document.getElementById('resultado5').textContent = resultado4
    
}
