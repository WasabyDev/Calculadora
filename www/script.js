function calculo(){

    var primeirov, segundov, terceirov,quartov,quintov, resultado
    
    
    primeirov = document.getElementById('valor1').value
    segundov = document.getElementById('valor2').value
    terceirov = document.getElementById('valor3').value
    quatov = document.getElementById('valor4').value
    quintov = document.getElementById('valor5').value


    resultado = (segundov * quartov * quintov) / primeirov * terceirov

    document.getElementById('valorx').value = resultado

}