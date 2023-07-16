// Las promesas son como un try catch
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whooops!');
        }
    })
}

//La siguiente funcion abarca todo el bloque de codigo porque se cierra el punto y coma hasta el final.
anotherFunction()
    .then(response => console.log(response)) // Aqui no se pone ; al final para que pueda entrar la logica al .catch()
    .catch(err => console.log(err));