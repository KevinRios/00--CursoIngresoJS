/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{


	var numeroUno= parseInt(document.getElementById('numeroDividendo').value);
	var numeroDos= parseInt(document.getElementById('numeroDivisor').value);

	var resto = numeroUno % numeroDos;	

	alert ("El resto es"+ resto);



	
	/*
		var resultado = 2 % 10:
		alert(resultado);

		var resultado = 10 % 2:
		alert(ressultado);
	*/	
}
