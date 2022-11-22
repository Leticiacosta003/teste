import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Sera criado mais tarde

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== Voce pode alterar a porta

server.use(middlewares);
server.use(router);

server.listen(port);
