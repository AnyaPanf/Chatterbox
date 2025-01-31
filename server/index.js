const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const route = require("./route");
const {
  addUser,
  findUser,
  getRoomUsers,
  removeUser,
  users,
} = require("./usersList");

const server = http.createServer(app);

app.use(cors({ origin: "*" }));
app.use(route);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ username, room }) => {
    socket.join(room);

    const { user } = addUser({ username, room });

    socket.emit("all_users", users);

    socket.emit("message", {
      data: {
        user: {
          username: "Admin",
        },
        message: `${user.username} joined room.`,
      },
    });

    socket.broadcast.to(user.room).emit("message", {
      data: {
        user: {
          username: "Admin",
        },
        message: `${user.username} joined room.`,
      },
    });

    io.to(user.room).emit("room", {
      data: { users: getRoomUsers(user.room) },
    });
  });

  socket.on("send_message", ({ message, params }) => {
    const user = findUser(params);

    if (user) {
      io.to(user.room).emit("message", { data: { user: user, message } });
    }
  });

  socket.on("room", ({ params }) => {
    let user = removeUser(params);

    if (user) {
      const { room, username } = user;
      io.to(room).emit("message", {
        data: {
          user: { username: "Admin" },
          message: `${username} left room.`,
        },
      });
      io.to(room).emit("room", {
        data: { users: getRoomUsers(room) },
      });
    }
  });

  socket.on("disconnect", () => {});
});

server.listen(5000, () => {
  console.log("Server is running");
});
