const users = {
    jarsen: {
        country: 'MX'
    },
    perez: {
        country: 'SL'
    }
}
// Retorna MX porque se acceden a valores existentes en el objeto users.
console.log(users.jarsen.country);
/**
 * El siguiente console.log retorna undefined gracias al encadenamiento opcional
 * esto no es mas que añadir el simbolo de pregunta ? despues de la propiedad que 
 * no estamos seguros de que se encuentre en el objeto que en este caso es la
 * propiedad tripas.
 * Primero ingresa a users que es correcto, seguido intenta ingresar a la propiedad tripas
 * la cual no existe y por esto mismo ya no pasa a la propiedad country, si no que se detiene
 * y retorna el undefined, si no tuviera el signo de pregunta retornaria un error.
 * IMPORTANTE: No abusar del encadenamiento opcional -?- solo utilizarlo en la propiedad
 * que no estemos seguros de que exista.
*/
console.log(users.tripas?.country);