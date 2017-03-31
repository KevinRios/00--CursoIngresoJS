//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{


	var importe;
	var importeMinimo;
	var importeMaximo;
	var dia;
	var contador=0;


	for (dia=0; dia<7; dia++) 
	{
		importe=parseInt(prompt("Ingrese importe: "));
		while(importe<0)
		{
			importe=parseInt(prompt("Valor incorrecto, Ingresar importe mayor a cero: "));
		}



		contador++;

		if (contador==1)
		{
			importeMaximo=importe;
			importeMinimo=importe;
		} 
		else
		{
			if (importe>importeMaximo)
			{
				importeMaximo=importe;
			} 
			else
			{
				if (importeMinimo>importe)
				{
					importeMinimo=importe;
				}
			}
		}


		
	}

		alert("El importe maximo es: "+importeMaximo);
		alert("El importe minimo es: "+importeMinimo);
	

	alert("Funciona 6-iteraciones");
//	
}
