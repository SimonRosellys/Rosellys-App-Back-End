const db = require("../index.js");
const format = require("pg-format");

function seed(data) {
  console.log(data);
  return db
    .query(`DROP TABLE IF EXISTS songs;`)
    .then((result) => {
      console.log(result);
      return db
        .query(`DROP TABLE IF EXISTS shows;`)
        .then(() => {
          return db.query(`CREATE TABLE shows (
            show_id SERIAL PRIMARY KEY,
            venue_name TEXT,
            venue_address TEXT,
            show_date DATE,
            soundcheck_time TIME, 
            set_start_time TIME,
            venue_website TEXT,
            line_up TEXT,
            confirmed BOOLEAN,
            player_availability TEXT,
            fee INT,
            paid_in BOOLEAN, 
            paid_out BOOLEAN,
            contact_details TEXT,
            notes TEXT
        );
        `);
        })
        .then(() => {
          return db.query(`CREATE TABLE songs (
        song_id SERIAL PRIMARY KEY,
        title TEXT,
        lyrics TEXT,
        song_key TEXT,
        instrumentation TEXT,
        composer TEXT,
        notes TEXT
    );
    `);
        });
    })
    .then(() => {
      const queryStr = format(
        `INSERT INTO songs
          (item_name, quantity)
          VALUES
          %L
          RETURNING *;`,
        itemData.map((item) => [item.item_name, item.quantity])
      );
      return db.query(queryStr);
    });
}

module.exports = seed;
