const entries = new Map([['name', 'Armando'], ['age', 25]]);
console.log(entries);
console.log(Object.fromEntries(entries));

/*
Map(2) { 'name' => 'Armando', 'age' => 25 }
{ name: 'Armando', age: 25 }
*/