function mostrar() {
  /* 
    Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
  nombre,
  carrera("Quimica";"Fisica";"Sistemas"),
  sexo (masculino - femenino -no binario),
  cantidad de materias(entre 1 y 5),
  Nota promedio del alumno(entre 0 y 10),
  edad (validar).
  Se debe informar de existir, o informar que no existe , en el caso que corresponda.
  a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
  b) El nombre de la alumna mas joven.
  c) Porcentaje de estudiantes que estudia cada carrera.
  d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
  */
  let nombre;
  let carrera;
  let sexo;
  let cantidadM;
  let notapromedio;
  let edad;
  let flagF = 1;
  let flagE = 1;
  let flagC = 1;
  let notapromedioFisica;
  let nombreFisica;
  let edadalumnajoven;
  let nombrealumnajoven;
  let contQ = 0;
  let contF = 0;
  let contS = 0;
  let porcentajeQ = 0;
  let porcentajeF = 0;
  let porcentajeS = 0;

  for (let i = 1; i <= 500; i++) {
    nombre = prompt("Ingrese nombre");

    edad = parseInt(prompt("Ingrese edad"));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Error. Ingrese edad"));
    }
    sexo = prompt("Ingrese sexo (masculino/ femenino/ no binario");
    while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
      sexo = prompt("Error. Ingrese sexo (masculino/femenino/ no binario/)");
    }
    carrera = prompt("Ingrese carrera (Quimica/ Fisica/ Sistemas)");
    while (
      carrera != "Quimica" &&
      carrera != "Fisica" &&
      carrera != "Sistemas"
    ) {
      carrera = prompt("Error. Ingrese carrera (Quimica/ Fisica/ Sistemas)");
    }
    cantidadM = parseInt(
      prompt("Ingrese la cantidad de materias (entre 1 y 5)")
    );
    while (!(cantidadM >= 1 && cantidadM <= 5)) {
      cantidadM = parseInt(
        prompt("Error. Ingrese la cantidad de materias ( entre 1 y 5)")
      );
    }
    notapromedio = parseFloat(prompt("Ingrese nota promedio (entre 0 y 10)"));
    while (notapromedio < 0 || notapromedio > 10) {
      notapromedio = parseFloat(
        prompt("Error. Ingrese nota promedio (entre 0 y 10)")
      );
    }

    switch (carrera) {
      case "Quimica":
        contQ++;

        break;
      case "Fisica":
        if (flagF == 1 || notapromedio > notapromedioFisica) {
          notapromedioFisica = notapromedio;
          nombreFisica = nombre;
          flagF = 0;
        }
        contF++;

        break;
      case "Sistemas":
        contS++;

        break;
    }
    if (sexo == "femenino" && (flagE == 1 || edad < edadalumnajoven)) {
      edadalumnajoven = edad;
      nombrealumnajoven = nombre;
      flagE = 0;
    }
    if (
      carrera != "Quimica" &&
      (flagC == 1 || cantidadM > cantidadMayormateria)
    ) {
      cantidadMayormateria = cantidadM;
      nombreMayormateria = nombre;
      edadMayormateria = edad;
      flag = 0;
    }
  }
  //fuera del for
  if (contQ != 0) {
    porcentajeQ = (contQ * 100) / 500;
  }
  if (contF != 0) {
    porcentajeF = (contF * 100) / 500;
  }
  if (contS != 0) {
    porcentajeS = (contS * 100) / 500;
  }

  //a
  if (contF == 0) {
    console.log("No se han ingresado alumnos de la carrera de Fisica");
  } else {
    console.log(
      "El nombre del mejor promedio de los alumnos de Fisica es " + nombreFisica
    );
  }

  //b
  if (flagF == 0) {
    console.log("El nombre de la alumna más joven es " + nombrealumnajoven);
  } else {
    console.log("No se han ingresado alumnos del sexo femenino");
  }
  //c
  console.log(
    "El porcentaje de alumnos por carrera es: Quimica: % " +
      porcentajeQ +
      "  Fisica: % " +
      porcentajeF +
      "  Sistemas: % " +
      porcentajeS
  );
  //d)
  if (flagC == 0) {
    console.log(
      "El alumno que cursa mayor cantidad de materias (Exceptuando Quimica) es " +
        nombreMayormateria +
        " y su edad es " +
        edadMayormateria +
        " años"
    );
  } else {
    console.log(
      "No se han ingresado alumnos de la carrera de Fisica ni de Sistemas"
    );
  }
}
