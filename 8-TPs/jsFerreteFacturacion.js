/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var valorUno= parseInt(document.getElementById('PrecioUno').value);
	var valorDos= parseInt(document.getElementById('PrecioDos').value);
	var valorTres= parseInt(document.getElementById('PrecioTres').value);

	var suma= valorUno + valorDos + valorTres ;

	alert(suma);
}


function Promedio () 
{
	
	var valorUno= parseInt(document.getElementById('PrecioUno').value);
	var valorDos= parseInt(document.getElementById('PrecioDos').value);
	var valorTres= parseInt(document.getElementById('PrecioTres').value);

	var promedio= (valorUno + valorDos + valorTres) / 3;

	alert(promedio);


}


function PrecioFinal () 
{

	
var valorUno= parseInt(document.getElementById('PrecioUno').value);
	var valorDos= parseInt(document.getElementById('PrecioDos').value);
	var valorTres= parseInt(document.getElementById('PrecioTres').value);

	var suma= valorUno + valorDos + valorTres;

	var iva = suma * 1.21;

	alert(iva);

}