const db = require("../db/connection");

exports.insertShow = (newShow) => {
  const {
    venue_name,
    venue_address,
    show_date,
    soundcheck_time,
    set_start_time,
    venue_website,
    line_up,
    confirmed,
    player_availability,
    fee,
    paid_in,
    paid_out,
    contact_details,
    notes,
  } = newShow;
  console.log(newShow);
  return db
    .query(
      "INSERT INTO shows (venue_name, venue_address, show_date, soundcheck_time, set_start_time, venue_website, line_up, confirmed, player_availability, fee, paid_in, paid_out, contact_details, notes ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;",
      [
        venue_name,
        venue_address,
        show_date,
        soundcheck_time,
        set_start_time,
        venue_website,
        line_up,
        confirmed,
        player_availability,
        fee,
        paid_in,
        paid_out,
        contact_details,
        notes,
      ]
    )
    .then(({ rows }) => rows[0]);
};

exports.fetchShows = () => {
  return db.query("SELECT * FROM shows");
};

exports.removeShow = (show_id) => {
  return db.query("DELETE FROM shows WHERE show_id = $1", [show_id]);
};

exports.fetchShowById = (show_id) => {
  return db.query("SELECT * FROM shows WHERE show_id = $1", [show_id]);
};

exports.updateShow = (show_id, key, value) => {
  return db
    .query(`UPDATE shows SET ${key} = $1 WHERE show_id = $2 RETURNING *; `, [
      value,
      show_id,
    ])
    .then((result) => {
      return result.rows[0];
    });
};

// exports.updateShow = (show_id, key, newData) => {
//   return db
//     .query(`UPDATE shows SET ${key} = $1 WHERE show_id = $2 RETURNING *; `, [
//       newData,
//       show_id,
//     ])
//     .then((result) => {
//       return result.rows[0];
//     });
// };
