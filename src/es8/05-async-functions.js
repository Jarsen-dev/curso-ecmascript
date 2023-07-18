/** Mi entendimiento sobre una funcion asincrona
 * Una funcion asincrona trabaja con promesas y lo que quieren decir al asignar async
 * antes de los parentesis es que la funcion retornara un resolve o reject de una
 * promesa y la palabra reservada await quiere decir que la funcion tiene que esperar
 * por la ejecucion de la promesa pero sin interrumpir la ejecucion del resto del codigo
 * , en otras palabras se continua ejecutando en segundo plano para que no interrumpa.
 * 
 * El operador ternario ( (true) ? : ) es como usar if else:
 * Dentro de los parentesis va la condicion para determinar si es true o false
 * El signo de pregunta ? ejecutara true
 * El signo : ejecutara false
 * 
 * setTimeOut es un metodo que retorna una funcion y en este caso se uso una funcion
 * flecha anonima que solo retornara el resolve 2 segundos despues de ser llamado el
 * metodo.
 * 
 * 
 * @returns {
 *  Before
 *  After
 *  async!!
 *  Hello!
 * }
 */

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('async!!', 2000))
        : reject(new Error('Error!!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');