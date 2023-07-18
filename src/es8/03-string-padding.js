// Este metodo añade al principio con padStart los valores que nosotros le indiquemos
// Este metodo añade al final con padEnd los valores que nosotros le indiquemos
// padStart(5, 'n'); El numero al inicio es el indice del string donde se añadira lo que le indiquemos

const string = 'Hello';
console.log(string.padStart(string.length + 1, '@'));
console.log(string.padEnd(string.length + 1, '-'));

/**
 * @Hello
 * Hello-
 */