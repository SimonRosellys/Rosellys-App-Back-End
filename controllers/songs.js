const {
  insertSong,
  fetchSongs,
  removeSong,
  updateSong,
  fetchSongById,
} = require("../models/songs.js");

exports.addSong = (req, res) => {
  insertSong(req.body).then((song) => res.status(201).send({ song }));
};

exports.getSongs = (req, res, next) => {
  fetchSongs().then((songs) => {
    // console.log(songs.rows);
    res.status(200).send(songs.rows);
  });
};

exports.deleteSong = (req, res) => {
  const song_id = req.params.id;
  removeSong(song_id).then((removedSong) => {
    res.status(200).send({ removedSong });
  });
};

exports.amendSong = (req, res) => {
  const { id } = req.params;
  const key = Object.keys(req.body)[0];
  const newData = Object.values(req.body)[0];
  updateSong(id, key, newData).then((updatedSong) => {
    res.send(updatedSong);
  });
};

exports.getSongById = (req, res) => {
  const song_id = req.params.id;
  fetchSongById(song_id).then((song) => {
    res.status(200).send(song.rows);
  });
};
