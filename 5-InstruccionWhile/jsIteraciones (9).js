		function Mostrar()
{


	//contadores
	var contador=0;
	var aprobado=0;

	var contadorDesaprobadoM=0;
	var contadorDesaprobadoF=0;
	var contadorMujeresEdadNotaPar=0;

	var acumuladorNotas=0;
	var acumuladorEdadMujeres=0;
	


	// declarar variables
	
	var nombre;
	var nombreMayor;
	var nombreMenor;
	var nombreDiez;
	var sexoDiez;
	var edadDiez;

	var edad;
	var edadMaxima;	
	var edadMinima;

	var nota;
	var notaMaxima;
	var notaMinima;
	var promedioNotas;
	
	var numeroPar;

	var sexo;

	var promedioEdadMujeres;

	var respuesta='si';

	
	// flags
	var banderaDiez="false";






	while(respuesta!='no')
	{


		//solicitud edad y validacion
		edad=parseInt(prompt("ingrese un edad"));
		while(edad<0 || edad>100)
		{
			edad=parseInt(prompt("Edad incorrecta, Ingresa una edad valida"));

		} 


		//solicitud sexo y validacion
		sexo=prompt("ingrese 'f' o 'm' ");
		while(sexo!= "f" && sexo!="m")
		{
			sexo=prompt("sexo incorrecto, Ingresa 'f' o 'm' ");
		}


		//solicitud nota y validacion
		nota=parseInt(prompt("ingrese un nota"));
		while(nota<0 || nota>11)
		{
		 	nota=parseInt(prompt("nota incorrecta, Ingresa una nota valida"));
		} 


	//--------------------------------------------
	//--------------------------------------------
	//--------------------------------------------


	//-----------------------
	// inicio solicitudes	
	//-----------------------


		// primero que se saca 10
		if(nota==10 && banderaDiez=="false")
		{
			nombreDiez=nombre;
			sexoDiez=sexo;
			edadDiez=edad;

			banderaDiez="true";
		}


		//promedio notas
		 acumuladorNotas=acumuladorNotas + nota;


	 	//promedio edad mujeres
		if(sexo=="f") 
		{
			acumuladorEdadMujeres=acumuladorEdadMujeres + edad;
		}
		

		//cantidad de personas aprobadas
		if (nota>3)
		{
			aprobado++;
		} 


		 // desaprobado Hombres
		 if (nota<4 && sexo=="m")
		 {
		 	contadorDesaprobadoM++;
		 	alert("desaprobaron "+contadorDesaprobadoM+"hombres");
     	 }


		 // desaprobado mujeres
		 if (nota<4 && sexo=="f")
		 {
		 	contadorDesaprobadoF++;	
		 	alert("desaprobaron "+contadorDesaprobadoF+"mujeres");
    	 }

		 
		 //cantidad de mujeres que aprobaron con notas par y menores de edad
		 if(sexo=="f" && nota>4 && nota%2==0 && edad<17)
		 {
		  	contadorMujeresEdadNotaPar++;
		 }


	//-----------------------
	// fin solicitudes
	//-----------------------
		
		contador++;


		nombre=prompt("ingrese un nombre");





		// iteracion asignacion

			if (contador==1)
			{
				edadMaxima=edad;
				edadMinima=edad;

				nombreMayor=nombre;

				notaMinima=nota;
				notaMaxima=nota;
			}


			else
			{		
			

				// iteracion asignacion maximos
	
				if (edad>edadMaxima)
				{
					edadMaxima=edad;
					nombreMayor=nombre;
				}
				
				if (edad<edadMinima)
				{
					edadMinima=edad;
					notaMinima=nota;
				}

				else
				{			
					if (edad>edadMaxima)
					{
						edadMaxima=edad;
						nombreMayor=nombre;
					}
				
					if (edad<edadMinima)
					{
						edadMinima=edad;
						notaMinima=nota;
					}
				
			}
			}






			

			

		
		respuesta=prompt("Para salir ingrese no");
	}


	document.getElementById('maximo').value=edadMaxima;
	document.getElementById('minimo').value=edadMinima;




	// alert(nombreMayor+"tiene "+edad);


		//cantidad de personas aprobadas
		 alert("aprobaron "+aprobado+"alumnos");


		alert("mujeres aprobadas, par, mayores de edad: "+contadorMujeresEdadNotaPar);


		// promedio de notas
		promedioNotas= acumuladorNotas/contador;
		alert("promedio de notas="+promedioNotas);

		// edad promedio mujeres
		promedioEdadMujeres =acumuladorEdadMujeres/contador;
		alert("Edad promedio mujeres=" +promedioNotas);

}

//FIN DE LA FUNCIÓN