function mostrar() {
  /*
	Una software factory registra la siguiente informacion de sus empleados:
  Nombre,
   edad (validar),
   sexo (masculino - femenino - no binario),
   puesto (programador - analista - Qa),
   sueldo (entre 15000 y 70000).
   La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
   a) promedio de sueldos para cada puesto
   b) el sexo del que percibe el mayor sueldo
   c) el nombre del empleado femenino con mas sueldo
   d ) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

	*/
  let nombre;
  let edad;
  let sexo;
  let puesto;
  let sueldo;
  let seguir;
  let acumA = 0;
  let acumP = 0;
  let acumQ = 0;
  let contA = 0;
  let contP = 0;
  let contQ = 0;
  let sexoMayorSueldo;
  let sueldoMayorFem;
  let sueldoMayorM;
  let sueldoMayorNB;
  let flagF = 1;
  let flagM = 1;
  let flagNB = 1;
  let contSNB = 0;

  do {
    nombre = prompt("Ingrese nombre");

    edad = parseInt(prompt("Ingrese edad"));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Error. Ingrese edad"));
    }
    sexo = prompt("Ingrese sexo (masculino/femenino/ no binario)");
    while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
      sexo = prompt("Error. Ingrese sexo (masculino/femenino/ no binario)");
    }
    puesto = prompt("Ingrese el puesto (programador/analista/Qa");
    while (puesto != "programador" && puesto != "analista" && puesto != "Qa") {
      puesto = prompt("Error. Ingrese el puesto (programador/analista/Qa");
    }
    sueldo = parseFloat(prompt("Ingrese sueldo (entre 15000 y 70000)"));
    while (sueldo < 15000 || sueldo > 70000) {
      sueldo = parseFloat(
        prompt("Error. Ingrese sueldo (entre 15000 y 70000)")
      );
    }

    // a)
    if (puesto == "programador") {
      acumP += sueldo;
      contP++;
    } else if (puesto == "analista") {
      acumA += sueldo;
      contA++;
    } else {
      acumQ += sueldo;
      contQ++;
    }
    //b c y d
    switch (sexo) {
      case "masculino":
        if (flagM == 1 || sueldo > sueldoMayorM) {
          sueldoMayorM = sueldo;
          flagM = 0;
        }
        break;
      case "femenino":
        if (flagF == 1 || sueldo > sueldoMayorFem) {
          sueldoMayorFem = sueldo;
          nombreFem = nombre;
          flagF = 0;
        }

        break;
      case "no binario":
        if (flagNB == 1 || sueldo > sueldoMayorNB) {
          sueldoMayorNB = sueldo;
          flagNB = 0;
        }
        if (puesto == "programador" && sueldo >= 20000 && sueldo <= 55000) {
          contSNB++;
        }

        break;
    }

    seguir = prompt("¿Quiere ingresar otro empleado?");
  } while (seguir == "si");
  //fin del do while

  if (sueldoMayorM >= sueldoMayorFem && sueldoMayorM > sueldoMayorNB) {
    sexoMayorSueldo = "Masculino";
  } else if (sueldoMayorFem >= sueldoMayorM && sueldoMayorFem > sueldoMayorNB) {
    sexoMayorSueldo = "Femenino";
  } else {
    sexoMayorSueldo = "No binario";
  }

  if (acumA != 0) {
    promedioA = acumA / contA;
  }
  if (acumP != 0) {
    promedioP = acumP / contP;
  }
  if (acumQ != 0) {
    promedioQ = acumQ / contQ;
  }

  // a)
  console.log(
    "El promedio de sueldo por cada puesto es: Analista: " +
      promedioA.toFixed(2) +
      "  Programador: " +
      promedioP.toFixed(2) +
      "  Qa: " +
      promedioQ.toFixed(2)
  );

  //b)
  console.log("El sexo con mayor sueldo es " + sexoMayorSueldo);

  //c)
  console.log(" El empleado femenino con mayor sueldo es " + nombreFem);
  //d
  console.log(
    "La cantidad de programadores no binarios con sueldos entre 20000 y 55000 son: " +
      contSNB
  );
}
