function Mostrar()
{	

	// variables
	var mascota;
	var tipoMascota;

	var edadGato;
	var nombreGato;
	var nombrePrimerGato;

	var personaViejaSinMascota;
	var edad;
	var sexo;
	var edadMujer;
	var edadPersonaViejaSinMascota;


	// flags
	var banderaGato="false";


	// variables contadores
	var contador;

	var contadorMascotaSi=0;
	var contadorMascotaNo=0;

	var contadorPerros=0;
	var contadorGatos=0;



	for (contador=0;contador<3;contador++) 
	{


		sexo=prompt("Ingrese sexo: ");

		//validacion sexo
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("sexo incorrecto, ingrese 'f' o 'm' : ");
		}

		edad=parseInt(prompt("ingrese edad"));

		mascota=prompt("tiene mascota?");

	   // validacion mascota
		while(mascota!= "si" && mascota!="no")
		{
			mascota=prompt("respuesta incorrecto, Ingresa 'si' o 'no' ");
		}




		// contador mascota
		if (mascota=="si") 
		{
			contadorMascotaSi++;


			// en caso de tener tipoMascota, ingresar perro o gato
			tipoMascota=prompt("Ingrese 'perro' o 'gato' ");
			while(tipoMascota!= "perro" && tipoMascota!="gato")
			{
				tipoMascota=prompt("respuesta incorrecto, Ingresa 'perro' o 'gato' ");
			}


			// asignacion edades por sexo
			if(sexo=="f")
			{
				edadMujer=edad;
			}



			if (tipoMascota=="perro")
			{
			   contadorPerros++;
			}

			if (tipoMascota=="gato")
			{

			   contadorGatos++;
			   

			   nombreGato=prompt("Ingrese nombre del gato: ");


			   edadGato=parseInt(prompt("Ingrese edad del gato: "));
			   while(edadGato<0 || edadGato>15)
			   {
			   		edadGato= parseInt(prompt("Edad incorrecta, ingrese una edad entre 0 y 15 : "));

			   }



			// nombre del primer gato que sea de una mujer, mayor a 30 ños y el gato no tenga mas de 5 años de edad

				if(edadGato<5 && edadMujer<30 && banderaGato=="false")
				{
					
					nombrePrimerGato=nombreGato;
					banderaGato="true";

				}




			}


		}


		if (mascota=="no") 	
		{
			contadorMascotaNo++;


			//persona mas vieja sin mascota

			

				
		}



	}

	alert("primer gato: "+nombrePrimerGato);

	//
	//alert("TIENEN mascotas: "+contadorMascotaSi);

	//alert("Tienen perros: "+contadorPerros);
	//alert("Tienen Gatos: "+contadorGatos);


	//alert("NO TIENEN mascoras: "+contadorMascotaNo);




}