function calculo(){

    var primeirov, segundov, terceirov, resultado
    var ultimor, ultimor2, ultioo3, ultimor4, ultimor5
    
    primeirov = document.getElementById('valor1').value
    segundov = document.getElementById('valor2').value
    terceirov = document.getElementById('valor3').value

    resultado = (segundov * terceirov) / primeirov

    document.getElementById('valorx').value = resultado

}