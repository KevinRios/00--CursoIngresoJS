// 1-realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.
// 2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
// sumándole el IVA (21%).
// 3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
// cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.



// Ejercicio 1


	var base=parseInt(document.getElementById('elNombre').value);

	var perimetro= base*4;

	alert("El perimetro es:  "+perimetro);



/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 2


var importe=parseInt(prompt("Ingrese importe:"));

var importeFinal= importe*1.21;
alert("El valor final es: "+importeFinal);





/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 3

var largo=parseInt(document.getElementById('elNombre').value);
var ancho=parseInt(document.getElementById('laEdad').value);

var areaTerreno= largo*ancho;

var terrenoAlambre= areaTerreno*3;

alert("Se necesitan "+terrenoAlambre+" mts de alambre");



/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 4


var numero1=parseInt(prompt("Ingresa un numero"));
	var numero2=parseInt(prompt("Ingresa otro numero"));
	var resultado;


	if (numero1==numero2)
	 {
	 	resultado=parseInt(numero1 * numero2);
	 }

	else
	{
		if (numero1>numero2)
	 	{
	 		resultado=numero1 - numero2;
	 	}
		 else
		 {
	 		resultado=numero1+numero2;
	 	}	

	}

	 alert("El primer numero es: "+numero1);
	 alert("El segundo numero es: "+numero2);	
	 alert("El resultado es: "+resultado);




/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 5


	var dia=prompt("ingrese un dia: ");


	switch(dia)
	{
		case sabado:
		case domingo:
		alert("es fin de semana");

		default
		alert("a trabajar");
	}





/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 6

	//contadores

	var contador=0;

	//variables
	var importe
	var importeMinimo;
	var importeMaximo;
	var dia;

	for (dia=0; dia<24; dia++) 
	{
		importe=parseInt(prompt("Ingrese un valor: "));
		while(importe<0)
		{
		 importe=parseInt(prompt("Valor incorrecto, ingresar numero mayor  a 0: "));
		}

		contador++;

	


		if (contador==1)
		{
			importeMaximo=importe;
			importeMinimo=importe;
		} 	
		else
		{
			if (importe>importeMinimo)
			{
				importeMaximo=importe;

			} 
			else
			{
				if (importe<importeMinimo)
				{
					importeMinimo=importe;
				} 
			}	
		}

	}

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 7




/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// Ejercicio 8



