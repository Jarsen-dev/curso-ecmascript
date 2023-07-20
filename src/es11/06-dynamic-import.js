const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

/**
 * Lo que sucede con dynamic import es que una vez que abrimos nuestro archivo index.html
 * en el navegador, este no accede al archivo de module.js, sino que lo hace hasta que
 * se da click al boton gracias a la funcion que le añadimos con async y await, por lo que
 * una vez se le de click el modulo y su logica aparecera en el navegador, esto se usa
 * muy seguido para que las paginas sean mas rapidas.
 */