const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

// Extraer array sin elementos repetidos

const array = [1,2,2,3,4,5,5,6];
const arrayWithoutR = [... new Set(array)]
console.log(arrayWithoutR)

// Encontrar array sin elementos repetidos

const a = [1, 2, 3, 2, 2]
const b = ['midu', 'dev', 'midu']
const c = [5, 10, 7, 8, 3]

const hasDuplicates = array =>
    new Set(array).size < array.length

// hasDuplicates(a)
// hasDuplicates(b)
console.log(hasDuplicates(c))