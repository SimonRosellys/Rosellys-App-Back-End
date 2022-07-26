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
  Object.entries(req.body).forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    updateSong(id, key, value);
  });
};

exports.getSongById = (req, res) => {
  const song_id = req.params.id;
  fetchSongById(song_id).then((song) => {
    res.status(200).send(song.rows);
  });
};
