/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let sexo;
	let temperatura;
	let edad;
	let totalEdad=0;
	let cantMasculino=0;
	let cantFemenino=0;
	let mujerMayorTemperatura;
	let acumTemperatura;
	let promedioEdad;
	let flag=0;

	for(let i=0;i < 5 ; i++){
		nombre=prompt("Ingrese nombre: ");
		temperatura=parseFloat(prompt("Ingrese su temperatura: ")).toFixed(2);
		sexo=prompt('Ingrese su sexo: "m o f"').toLowerCase();
		while(!(sexo == "m" || sexo == "f")){
			sexo=prompt("INVALIDO.Ingrese sexo nuevamente: m o f").toLowerCase();
		}
		edad=parseInt(prompt("Ingrese su edad: "));
		while(edad < 1 || edad > 110 || isNaN(edad)){
			edad=parseInt(prompt("INVALIDO.Ingrese edad nuevamente: "));
		}
		if(sexo == "m"){
			cantMasculino++;
		}
		else{
			cantFemenino++;
		}
		totalEdad+=edad;
        switch(sexo){
			case "f":
				flag++;
				if(flag==1){
					acumTemperatura=temperatura;
					mujerMayorTemperatura=nombre;
				}
				else{
					if(acumTemperatura < temperatura){
						acumTemperatura=temperatura;
						mujerMayorTemperatura=nombre;
					}
				}
				break;
		}
	}

	promedioEdad=totalEdad / 5;

	console.log("A) Cantidad de masculinos: " + cantMasculino + "\nCantidad de femeninos: "+ cantFemenino);
	console.log("B) La edad promedio en total es: "+ promedioEdad);

	if(flag > 0){
		console.log("C)La mujer con mayor temperatura es: "+mujerMayorTemperatura + " y tiene: "+ acumTemperatura+"°");
	}
	else{
		console.log("C)No se ingreso ninguna persona del sexo femenino");
	}

}
