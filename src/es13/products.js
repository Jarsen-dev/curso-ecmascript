import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products };

/**
 * Anteriormente para traer una api se tenia que utilizar async, sin embargo con esta 
 * nueva implementacion de top level await ya solo es necesario await, donde esto
 * quiere decir que el programa tiene que esperar hasta que se traiga todo lo que 
 * tiene la api que estamos importando, seguido de eso la transformamos con el metodo
 * .json() para observar los valores en esta sintaxis.
 */