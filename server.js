const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {

  socket.on("join-room", room => {

    socket.join(room);

    socket.to(room).emit("user-connected", socket.id);

  });

  socket.on("signal", ({ target, data }) => {

    io.to(target).emit("signal", {
      sender: socket.id,
      data: data
    });

  });

});
