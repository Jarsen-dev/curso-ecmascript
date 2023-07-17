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

// Ejercicio Playground
function* getId() {
    while (true) {
        yield Math.round(Math.random()*10) + Math.random().toString(36).substring(5).toUpperCase();
    }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);