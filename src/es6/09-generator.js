function* iterate(arr) {
    for (let value of arr) {
        yield value;
    }
}
const it = iterate(['Oscar', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);