// enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('Jarsen', 24, 'MX', 1));