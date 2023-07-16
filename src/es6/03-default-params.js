function newUser(name, age, country) {
    var name = name || 'Armando';
    var age = age || 24;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Juan', 26, 'UA');

function newAdmin(name = 'Pedro', age = 30, country = 'CO') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Javier', 37, 'GT');