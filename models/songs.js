const db = require("../db/connection");

exports.insertSong = (newSong) => {
  const {
    title,
    lyrics,
    song_key,
    instrumentation,
    composer,
    notes,
    album,
    stage_ready,
  } = newSong;
  console.log(newSong);
  return db
    .query(
      "INSERT INTO songs (title, lyrics, song_key, instrumentation, composer, notes, album, stage_ready) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
      [
        title,
        lyrics,
        song_key,
        instrumentation,
        composer,
        notes,
        album,
        stage_ready,
      ]
    )
    .then(({ rows }) => rows[0]);
};

exports.fetchSongs = () => {
  return db.query("SELECT * FROM songs");
};

exports.removeSong = (song_id) => {
  return db.query("DELETE FROM songs WHERE song_id = $1", [song_id]);
};

exports.updateSong = (song_id, key, value) => {
  return db
    .query(`UPDATE songs SET ${key} = $1 WHERE song_id = $2 RETURNING *; `, [
      value,
      song_id,
    ])
    .then((result) => {
      return result.rows[0];
    });
};

exports.fetchSongById = (song_id) => {
  return db.query("SELECT * FROM songs WHERE song_id = $1", [song_id]);
};
