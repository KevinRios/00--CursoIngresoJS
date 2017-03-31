/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



	




function sumar()
{	
	
	var numeroUno= parseInt(document.getElementById('numeroUno').value);
	var numeroDos= parseInt(document.getElementById('numeroDos').value);


	var suma = numeroUno + numeroDos;

	alert (suma)

}

function restar()
{
	
	var numeroUno= parseInt(document.getElementById('numeroUno').value);
	var numeroDos= parseInt(document.getElementById('numeroDos').value);

	var resta = numeroUno - numeroDos;

	alert (resta);
}

function multiplicar()
{ 
	

	var numeroUno= parseInt(document.getElementById('numeroUno').value);
	var numeroDos= parseInt(document.getElementById('numeroDos').value);

	var multiplicacion = numeroUno * numeroDos;

	alert (multiplicacion);
}

function dividir()
{
	

	var numeroUno= parseInt(document.getElementById('numeroUno').value);
	var numeroDos= parseInt(document.getElementById('numeroDos').value);

	var division = numeroUno / numeroDos;

	alert (division);
}

