const aNullNumber = null;
const validate = aNullNumber ?? 5;
console.log(validate);

/*
El operador ?? lo que hace es que valida si la constante aNullNumber se trata de un
valor null y si lo es retorna la logica o el numero que le asignemos a la derecha de este
y si aNullNumber no es un valor null retorna el valor de la constante.
Retorna: 5
*/

// Diferencia entre el operador OR y el Nullish coalescing
// 🔨 El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es 
// falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, 
// undefined o null.
// Puede que recibas una variable con un valor falsy que necesites asignarle a 
// otra variable, que no sea null o undefined. Si evalúas con el operador OR, este 
// lo cambiará, provocando un resultado erróneo.

const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId )  // 0