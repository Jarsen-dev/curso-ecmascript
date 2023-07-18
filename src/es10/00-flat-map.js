//flat
const array = [1,2,3,4, [5,6,7,8,9, [3,5,6]]];
console.log(array.flat(3));

/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 3,
  5, 6
]
*/

//flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));

/* [v, v * 2] Esto retorna el valor del array seguido del mismo valor por 2
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/