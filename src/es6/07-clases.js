// declarando
class User {};
// instancia de una clase
// const newUser = new User();

class user {
    // metodos
    sayHi() {
        return 'Hello';
    }
};

const jarsen = new user();
console.log(jarsen.sayHi());
const bebeloper = new user();
console.log(bebeloper.sayHi());

// constructor

class user {
    // constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    sayHi() {
        return 'Hello';
    }
}

const pedro = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    sayHi() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.sayHi());

// setters getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    sayHi() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);