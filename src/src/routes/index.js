const mainRouter = require('./mainRouter');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');

module.exports = {
    mainRouter,
    productsRouter,
    usersRouter,
};

/*Aqui se dará exportación del conjunto de modulos importados de la misma carpeta
con la modularización de las rutas correspondientes por su recurso en específico.

¿para qué?
Para que en el entry point, solamente se importe este archivo, y este archivo que ya contiene
todas las importaciones de los modulos de las rutas, tendremos solamente que exportar este archivo
y además importarlo en el entry point, pero ahora haciendo referencia a el modulo en específico, 
se recomienda entonces tener cuidado en el nombrado de los mismos modulos con las rutas modularizadas ( routers ),
siendo así  mucho más organizado nuestro código en el entry point.
*/

