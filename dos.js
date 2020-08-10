/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumPeso=0;
  let acumLiquido;
  let acumSolido;
  let marcaB;
  let marcaC;
  let i;
  let flagLiquido=0;
  let flagSolido=0;

  do{
    marca=prompt("Ingrese la marca: ");
    precio=parseFloat(prompt("Ingrese su precio : $")).toFixed(2);
    while(precio < 1 || isNaN(precio)){
      precio=parseFloat(prompt("INVALIDO.Ingrese su precio nuevamente: $")).toFixed(2);
    }
    peso=parseFloat(prompt("Ingrese el peso: (kls)"));
    while(peso < 1 || isNaN(peso)){
      peso=parseFloat(prompt("INVALIDO.Ingrese el peso nuevamente: (kls)"));
    }
    tipo=prompt('Ingrese el tipo: "solido o liquido"');
    while(!(tipo == "solido" || tipo == "liquido")){
      tipo=prompt('INVALIDO.Ingrese el tipo nuevamente: "solido o liquido"');
    }
    acumPeso+=peso;
    switch(tipo){
      case "liquido":
        flagLiquido++;
        if(flagLiquido==1){
          acumLiquido=precio;
          marcaB=marca;
        }
        else{
          if(acumLiquido > precio){
            acumLiquido=precio;
            marcaB=marca;
          }
        }
        break;
      default:
        flagSolido++;
        if(flagSolido==1){
          acumSolido=peso;
          marcaC=marca;
        }
        else{
          if(acumSolido > peso){
            acumSolido=peso;
            marcaC=marca;
          }
        }
    }
    i=prompt('Si desea ingresar mas productos escriba "si"');
  }while(i=='si');
 
  console.log("A) El peso total de la compra es: "+acumPeso+" kls");
  console.log("B) El mas caro de los liquidos es: "+marcaB + " y cuesta $ " + acumLiquido);
  console.log("C) El mas liviano de los solidos es: "+marcaC+" y pesa "+ acumSolido + "kls");
}
