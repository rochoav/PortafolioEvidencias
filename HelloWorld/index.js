//Creacion de Mini-Servidor para que se muestre en la web
//Definicion de variables
const http = require('http');
const hostname = '127.0.0.1'; // localhost
// al usar const si se define la variable de esta forma para que así no cambien los valores asignados a ella
const port = 3000;
// funcion anonima - callback (funcion que se retorna desde una función interna)
// request (req)= peticion o solicitud del cliente
// response(res)=  devuelve el resultado de lo que ha procesado
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Al decir montarla, indicar en donde estará colgado el servidor para ejecutarlo
server.listen(port, hostname, function () {
  console.log('Server running on port 3000');
});
