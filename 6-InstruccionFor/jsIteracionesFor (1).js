function Mostrar()
{



	// var contador=0;


	// for (;;)
	// {
	// 	console.log(contador);

	// 	contador++;

	// 	if (contador==5) 
	// 	{
	// 		break;
	// 	}

	// }

	var contador;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;

	var numeroRandom;



	for (contador=0; contador<100000; contador++) 
	{

		numeroRandom= Math.floor((Math.random() * 10) + 1);

		//console.log(numeroRandom);


		switch(numeroRandom)
		{
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;

			case 3:
				contador3++;
				break;

			case 4:
				contador4++;
				break;

			case 5:
				contador5++;
				break;

			case 6:

				contador6++;
				break;

			case 7:
				if (contador7==7)
				 {20
				 	continue;
				 }

				 contador7++;
				 break;

			case 8:
				contador8++;
				break;	

			case 9:
				contador9++;
				break;
				
			case 10:
				contador10++;
				break;		
		}



	}


	 console.log("vueltas contador= "+contador);

	 console.log ("LA CANTIDAD DE 1 "+ contador1/contador*100+" %");
	 console.log ("LA CANTIDAD DE 2 "+ contador2/contador*100+" %");
	 console.log ("LA CANTIDAD DE 3 "+ contador3/contador*100+" %");
	 console.log ("LA CANTIDAD DE 4 "+ contador4/contador*100+" %");
	 console.log ("LA CANTIDAD DE 5 "+ contador5/contador*100+" %");
	 console.log ("LA CANTIDAD DE 6 "+ contador6/contador*100+" %");
	 console.log ("LA CANTIDAD DE 7 "+ contador7/contador*100+" %");
	 console.log ("LA CANTIDAD DE 8 "+ contador8/contador*100+" %");
	 console.log ("LA CANTIDAD DE 9 "+ contador9/contador*100+" %");
	 console.log ("LA CANTIDAD DE 10 "+ contador10/contador*100+" %");


	// porcentaje



}