function mostrar()
{
	/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
Curso de ingreso UTN FRA */

let seguir;
let nombre;
let cantidad;
let marca;
let precio;
let descuentoF = 0;
let descuentoA = 0;
let descuentoTotal = 0;
let acumF = 0;
let acumA = 0;
let acumI = 0;
let acumPrecio = 0;
let acumCantidad = 0;
let contF = 0;
let contA = 0;
let contI = 0;
let promedioF = 0;
let promedioA = 0;
let promedioI = 0;
let totalventas = 0;
let totalgananciasF;
let totalganaciasA;
let totalganaciasI;
 



do{

  nombre = prompt("Ingrese nombre");

  cantidad = parseInt(prompt("Ingrese cantidad"));

  while(isNaN(cantidad) || cantidad <= 0){
    cantidad = parseInt(prompt("Error. Ingrese cantidad"));
  }
  marca = prompt("Ingrese marca (FelipeLamparas/ ArgentinaLuz/ Illuminatis)");
  while(marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis"){
    marca = prompt("Error. Ingrese marca (FelipeLamparas/ ArgentinaLuz/ Illuminatis)");
  }
  precio = parseFloat(prompt("Ingrese precio"));
  while(isNaN(precio) || precio < 0){
    precio = parseFloat(prompt("Error. Ingrese precio"));
  }
  acumPrecio += precio;
  acumCantidad += cantidad;


  switch (marca) {
    case "FelipeLamparas":
      acumF += cantidad;
	  acumPrecioF += precio;
	  contF++;
      if(cantidad > 5){
		  descuentoF += (precio * contF) / 0.1;
		}
      
      break;
      case "ArgentinaLuz":
        acumA += cantidad;
		acumPrecioA += precio;
		contA++;
        if(cantidad >= 3){
			descuentoA += (precio * contA) / 0.05;
			
        }
        break;
        case "Illuminatis":
          acumI += cantidad;
		  acumPrecioI += precio;
          contI++;
      
          break;
      }





  seguir = prompt("¿Quiere seguir?");

}while(seguir == "si");
//Afuera del do
 totalventas = acumCantidad * acumPrecio;

 descuentoTotal = descuentoA + descuentoF;

 totalgananciasF = acumF * acumPrecioF;
 totalgananciasA = acumA * acumPrecioA;
 totalgananciasI = acumI * acumPrecioI;

 if(totalgananciasF >= totalganaciasA && totalgananciasF > totalganaciasI){
	 marcaMasVentas = "FelipeLamparas";
 }
 else if(totalgananciasA >= totalganaciasF && totalgananciasA> totalganaciasI){
	marcaMasVentas = "ArgentinaLuz";

 }
 else{
	marcaMasVentas = "Illuminati";

 }


 


 // c
 if( acumF!= 0){
   promedioF = acumF / contF;

 }
 if( acumA!= 0){
  promedioA = acumA / contA;
 }
 if( acumI!= 0){
  promedioI = acumI / contI;
 }

//a

if(descuentoTotal != 0){
	
	console.log("La empresa recaudo en total " + totalventas);
}
else {
	totalventas = totalventas - descuentoTotal;
	console.log("La empresa recaudo en total " + totalventas);
}
 
 //b

   console.log("La empresa perdió " + descuentoTotal);     
    
//c
 console.log("El promedio de la cantidad de lamparas por marca es: FelipeLamparas: " + promedioF + "  ArgentinaLuz: " + promedioA + "  Illuminati: " + promedioI );

 //d 

 console.log("La marca que tuvo más ventas fue " + marcaMasVentas);

}
