/**Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes 
aprueban con 48Ptos. 
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de 
aprobados, cantidad de reprobados y nota promedio de la sección. 
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos), 
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 333 (90Ptos), 444 (48Ptos) y 
222 (60Ptos) */

import Cl_seccion from "./Cl_seccion.js";
import Cl_estudiantes from "./Cl_estudiantes.js";

let sec = new Cl_seccion();

let est1 = new Cl_estudiantes(888, 60);
let est2 = new Cl_estudiantes(777, 50);
let est3 = new Cl_estudiantes(999, 40);
let est4 = new Cl_estudiantes(333, 80);
let est5 = new Cl_estudiantes(111, 30);
let est6 = new Cl_estudiantes(666, 90);
let est7 = new Cl_estudiantes(444, 48);
let est8 = new Cl_estudiantes(222, 60);

sec.procesarEstudiantes(est1);
sec.procesarEstudiantes(est2);
sec.procesarEstudiantes(est3);
sec.procesarEstudiantes(est4);
sec.procesarEstudiantes(est5);
sec.procesarEstudiantes(est6);
sec.procesarEstudiantes(est7);
sec.procesarEstudiantes(est8);

let salida = document.getElementById("salida");

salida.innerHTML = `
Cantidad de aprobados: ${sec.contAprobados} <br>
Cantidad de reprobados: ${sec.contReprobados} <br>
Nota promedio de la seccion: ${sec.calcPromedio()} <br>`