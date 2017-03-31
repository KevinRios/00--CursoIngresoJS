function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	document.getElementById('Sexo').value=sexo;



	while(sexo!= "f" && sexo!="m")
	{
		alert("incorrecto");
		sexo = prompt("ingrese f ó m .");
		document.getElementById('Sexo').value=sexo;
	}	

	 alert ("sexo: "+sexo);




}//FIN DE LA FUNCIÓN
