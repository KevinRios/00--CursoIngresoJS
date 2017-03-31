//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var pregunta;

	var numero=0;
	var numeroMaximo=0;
	var numeroMinimo=0;
	var acumuladorNumeros=0;
	var promedio;

	var contador=0;
	var contadorNumeroPar=0;
	
	


	pregunta=prompt("Quiere ingresar numeros?");
	while(pregunta!="no" && pregunta!="si")
	{
		pregunta=prompt("Responda si o no!, Quiere ingresar numeros?");
	}



	while(pregunta=="si")
	{

		numero=parseInt(prompt("Ingresar un numero:"));
		while(numero<0)
		{
			numero=parseInt(prompt("valor incorrecto, ingresar numero mayor a cero:"));
		}

		contador++
		acumuladorNumeros= acumuladorNumeros+numero;

		pregunta=prompt("Quiere seguir ingresar numeros?");
		while(pregunta!="no" && pregunta!="si")
		{
			pregunta=prompt("Responda si o no!, Quiere seguir ingresando numeros?");
		}


		if(numero % 2 ==0)
		{
			contadorNumeroPar++;
		}	


		if (contador==1)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
		} 
		else
		{
			if (numero>numeroMaximo)
			{
				numeroMaximo=numero;
			} 
			else
			{
				if (numeroMinimo>numero)
				{
					numeroMinimo=numero;
				}
			}
		}

	}


	// promedio
	promedio= acumuladorNumeros/contador;
	

	document.write("A) La cantidad de numeros pares es: "+contadorNumeroPar+"<br>"+"B) El promedio es: "+promedio+"<br>"+"C) La suma es: "+acumuladorNumeros+"<br>"+ "D)El numero maximo es el : "+numeroMaximo+ " y el numero minimo es: "+numeroMinimo)
	

	
}

