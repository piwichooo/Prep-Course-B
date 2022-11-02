// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:

    let suma=0
    for (let i = 0; i <=10 ; i++ ){
      suma +=i;
    }

    return suma;
    
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

  let pares = array.filter((x)=>x%2==0)
  return pares

    

}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  let cuadrado = [];
  for (let i = 0; i < array.length  ; i++ ){

    cuadrado.push(array[i]**2);
  }
  return (cuadrado);
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  let suma = 0;

  for (let i = 0; i < array.length  ; i++ ){

    suma += array[i];
  }
  return (suma);

}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  
  let control = 10;
  let cifra = 0;

  for (let contador = 1; control <= num; contador++){
    control = control * 10;
    cifra = contador +1;
  }return cifra;



}
  
  



  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
