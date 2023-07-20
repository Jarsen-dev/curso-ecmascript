const aBigNumber = 8953582493454457482n;
const anotherBigNumber = BigInt(8953582493454457482n);

console.log(aBigNumber);
console.log(anotherBigNumber);

/*
JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un 
mínimo Number.MIN_SAFE_INTEGER. Fuera de estos límites, los cálculos matemáticos 
pueden fallar y mostrar resultados erróneos. Con BigInt esto se resuelve.

8953582493454457482n
8953582493454457482n
*/