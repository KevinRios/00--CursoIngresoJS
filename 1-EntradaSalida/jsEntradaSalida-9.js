/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	


	var salario= parseInt(document.getElementById('sueldo').value);
	

	var salarioConAumento = (salario * 1.10).toFixed(2) ;

	document.getElementById('resultado').value = salarioConAumento ;

	
}
