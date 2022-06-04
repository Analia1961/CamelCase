//Clase 13 - Ejercicios de Repaso - Lunes 30 de mayo de 2022
//Ejercicio 1  – Convertir texto en CamelCase

/*Escribir un algoritmo que pida al usuario ingresar una
serie de textos, hasta que ingrese un texto vacío, y
los convierta en nombres de variable que cumpla las
recomendaciones de buenas prácticas.

Por ejemplo si el usuario ingresa: cantidad de pasos
lo debe convertir en cantidadDePasos*/

//MODIFICACIÓN ENUNCIADO – Prof. Carlos Daniel Tonelli
/* Buenas tardes!
Hoy comenzaremos con el ejercicio práctico de la diapositiva Nº52 
(de PROG - 7. Repaso.pdf) con una sutil diferencia en el enunciado; 
es decir, cambiaremos levemente el requerimiento 
y adaptaremos el código al cambio solicitado.*/

//Recibe un texto y lo convierte en un nombre de variable estilo CamelCase
function convertirACamelCase(texto: string): string {
  let textoLocal: string = texto.toLowerCase().trim();
  let vbleCamelCase: string = "";
  let indice: number = 0;
  while (indice < textoLocal.length) {
    if (textoLocal[indice] === " ") {
      vbleCamelCase += textoLocal[indice + 1].toUpperCase();
      indice += 2;
    } else {
      vbleCamelCase += textoLocal[indice];
      indice++;
    }
  }
  return vbleCamelCase;
}
let texto: string = prompt("Ingrese el texto a convertir");
console.log("Texto original: " + texto);
console.log("Texto camelCase: " + convertirACamelCase(texto));

//------------- ✿◕‿◕✿----------------

// Recibe un texto y lo convierte en un nombre de variable estilo CamelCase
//(filmina - pagina 79/80)
/*function convertirACamelCase(texto : string) : string {
  let textoLocal : string = texto.toLowerCase().trim();
  let vbleCamelCase : string = ‘’;
  let indice : number = 0;
  while (indice < textoLocal.length) {
    if (textoLocal[indice]== ‘ ’) {
      vbleCamelCase += textoLocal[indice+1].toUpperCase();
       indice+=2;
    } else {
      vbleCamelCase += textoLocal[indice];
       indice++;
    }
    }
  return vbleCamelCase;
  }
  let texto : string = prompt(‘Ingrese el texto a convertir a CamelCase : ’);
  while (texto != ‘’) {
    console.log(convertirACamelCase(texto));
    texto = prompt(‘Ingrese el texto a convertir a CamelCase : ’);
}*/
