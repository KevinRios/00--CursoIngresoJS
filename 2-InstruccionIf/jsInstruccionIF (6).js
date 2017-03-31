function Mostrar()
{
//tomo la edad  

	var edad= parseInt(document.getElementById('edad').value);


	if (edad<=12)
	{
		alert("NIÑO");

	}

	else
	{
		if (edad >= 12 && edad < 18) 
		{
			alert("ADOLESCENTE");
		}
		else
		{
		alert("MAYOR");		
		}

	} 

	 

}//FIN DE LA FUNCIÓN