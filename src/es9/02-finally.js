const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        (false) ? resolve('Hey!!') : reject('Whooops!');
    })
}


anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally!'));