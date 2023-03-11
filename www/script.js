var historico1 = "";
var historico2 = "";
var historico3 = "";
var historico4 = "";
var historico5 = "";


function calcularconta() {

	var valor1 = parseFloat(document.getElementById("valor1").value);
	var valor2 = parseFloat(document.getElementById("valor2").value);
	var valor3 = parseFloat(document.getElementById("valor3").value);
	var valor4 = parseFloat(document.getElementById("valor4").value);
	var valor5 = parseFloat(document.getElementById("valor5").value);

	var vl6 = (valor2 * valor5);
	var vl7 = (valor3 * valor4) * valor1;
	var resultado = (vl7 / vl6);
	document.getElementById("resultado").value = resultado;

	    historico6 = historico5;
    	historico5 = historico4;
    	historico4 = historico3;
    	historico3 = historico2;
	    historico2 = historico1;
    	historico1 = resultado;

	document.getElementById("historico1").innerHTML = "Historico: " + historico1;
	document.getElementById("historico2").innerHTML = "Historico2: " + historico2;
	document.getElementById("historico3").innerHTML = "Historico3: " + historico3;
	document.getElementById("historico4").innerHTML = "Historico4: " + historico4;
	document.getElementById("historico5").innerHTML = "Historico5: " + historico5;
}

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
	inputField.value = '';
});