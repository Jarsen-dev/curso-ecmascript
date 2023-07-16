// arrays destructuring

let fruits = ['Apple', 'Banana', 'Mango', 'Piña'];
let [a, b, c] = fruits;
console.log(a, b, c);

// object destructuring

let user = { username: 'Armando', age: 24 };
let { username, age } = user;
console.log(username, age);

// spread operator

let person = { name: 'Eduardo', age: 18 };
let country = 'CR';

let data = {...person, country};
console.log(data);

let numbers = [1,2,3,4,4,5];
let newNumber = 6;

let allNumbers = [...numbers, newNumber];
console.log(allNumbers);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

// Ejercicio de PlayGround
function solution(json1, json2) {
    let obj1 = json1 || { name: 'Mr. Michi', food: 'Pescado' };
    let obj2 = json2 || { age: 12, color: 'Blanco' };
    let allObjs = { ...obj1, ...obj2 };
    console.log(allObjs);
}

solution({ name: 'Bigotes', food: 'Pollito' });