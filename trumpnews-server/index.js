const server = require('./server');

server.start()
    .then((s) => console.log(`Server listening to ${s.info.uri}`));
