const httpServer = require("http").createServer();

const options = {
  /* ... */
};
const io = require("socket.io")(httpServer, options);

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);
