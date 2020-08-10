/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let titular;
	let lugar;
	let temporada;
	let cantidad;
	let lugarMasElegido;
	let titularMasPasajeros;
	let promedio;
	let contadorB=0;
	let contadorC=0;
	let contadorS=0;
	let acumPasajeros;
	let contadorInvierno=0;
	let acumInvierno=0;
	let i;
	let flagCantidad=0;

	do{
		titular=prompt("Ingrese nombre: ");
		lugar=prompt("Ingrese lugar");
		while(!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")){
			lugar=prompt("INVALIDO. Ingrese nuevamente el lugar:");
		}
		temporada=prompt("Ingrese la temporada: ")
		while(!(temporada=="otoño" ||temporada=="primavera" ||temporada=="verano" ||temporada=="invierno")){
			temporada=prompt("INVALIDO.Ingrese temporada nuevamente");
		}
		cantidad=parseInt(prompt("Ingrese la cantidad de personas que viajan"));
		while(cantidad < 1){
			cantidad=parseInt(prompt("INVALIDO.Ingrese la cantidad de personas que viajan nuevamente"));
		}
		switch(lugar){
			case "bariloche":
				contadorB++;
				break;
			case "cataratas":
				contadorC++;
				break;
			default:
				contadorS++;
		}
		if(flagCantidad ==0){
			acumPasajeros=cantidad;
			titularMasPasajeros=titular;
			flagCantidad++;
		}
		else{
			if(acumPasajeros < cantidad){
				acumPasajeros=cantidad;
				titularMasPasajeros=titular;
			}
		}
		if(temporada=="invierno"){
		  contadorInvierno++;
		  acumInvierno+=cantidad;
		}
      i=prompt('Si desea seguir ingresando estadias escriba "si"');
	}while(i == "si");

	if(contadorB > contadorC && contadorB > contadorS){
		lugarMasElegido="bariloche";
	}
	else if(contadorC > contadorB && contadorC > contadorS){
		lugarMasElegido="cataratas";
	}
	else{
		lugarMasElegido="salta";
	}

	promedio= acumInvierno / contadorInvierno;

	console.log("A) Lugar mas elegido: "+ lugarMasElegido);
	console.log("B) El titular que lleva mas pasajeros: " + titularMasPasajeros);
	console.log("C) El promedio de personas por viaje en inviero es: "+promedio );
}
