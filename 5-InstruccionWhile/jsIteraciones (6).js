function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio=acumulador/5;
	var numero;
	



	while(contador<5)
	{	
		contador++;
		numero=parseInt(prompt("ingresar numero"));

		acumulador=acumulador+numero;
	}





	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;



}//FIN DE LA FUNCIÓN