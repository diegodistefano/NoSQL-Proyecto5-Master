const express = require('express');
const {connect} = require('./utils/db')

const routes = require('./routes/movie.routes')

connect();
const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/', routes);

server.listen(PORT, () => {
  console.log(`Server running in <http://localhost>:${PORT}`);
});