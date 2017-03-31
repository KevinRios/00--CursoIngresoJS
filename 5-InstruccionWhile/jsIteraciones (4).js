function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>9)
	{

		alert("numero incorrecto");

		numero=prompt("ingrese numero valido");
	}


	alert("numero valido");



}//FIN DE LA FUNCIÓN