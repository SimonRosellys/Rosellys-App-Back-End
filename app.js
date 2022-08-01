const express = require("express");
const {
  addUser,
  getUsers,
  deleteUser,
  amendUser,
} = require("./controllers/users.js");
const {
  addSong,
  getSongs,
  deleteSong,
  amendSong,
  getSongById,
} = require("./controllers/songs.js");
const {
  addShow,
  getShows,
  deleteShow,
  amendShow,
  getShowById,
} = require("./controllers/shows.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/users", getUsers);
app.get("/api/songs", getSongs);
app.get("/api/shows", getShows);

app.post("/api/users", addUser);
app.post("/api/songs", addSong);
app.post("/api/shows", addShow);

app.delete("/api/users/:id", deleteUser);
app.delete("/api/songs/:id", deleteSong);
app.delete("/api/shows/:id", deleteShow);

app.patch("/api/users/:id", amendUser);
app.patch("/api/songs/:id", amendSong);
app.patch("/api/shows/:id", amendShow);

app.get("/api/shows/:id", getShowById);
app.get("/api/songs/:id", getSongById);

module.exports = app;
