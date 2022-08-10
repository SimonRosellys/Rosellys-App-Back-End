const format = require("pg-format");
// const {
//   convertTimestampToDate,
//   createRef,
//   formatComments,
// } = require("../helpers/utils");
const db = require("../connection");
const { dropTables, createTables } = require("..//helpers/manage-tables");

const seed = async ({ songData, showData, setlistsData }) => {
  await dropTables();
  await createTables();

  const insertSongsQueryStr = format(
    "INSERT INTO songs ( title, lyrics, song_key, instrumentation, composer, notes) VALUES %L RETURNING *;",
    songData.map(
      ({ title, lyrics, song_key, instrumentation, composer, notes }) => [
        title,
        lyrics,
        song_key,
        instrumentation,
        composer,
        notes,
      ]
    )
  );
  const songsPromise = db
    .query(insertSongsQueryStr)
    .then((result) => result.rows);

  const insertShowsQueryStr = format(
    "INSERT INTO shows (venue_name, venue_address, show_date, soundcheck_time, set_start_time, venue_website, line_up, confirmed, player_availability, fee, paid_in, paid_out, contact_details, notes) VALUES %L RETURNING *;",
    showData.map(
      ({
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
      }) => [
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
  );
  const showsPromise = db
    .query(insertShowsQueryStr)
    .then((result) => result.rows);

  const insertSetlistQueryStr = format(
    "INSERT INTO setlists ( show_id, list_array) VALUES %L RETURNING *;",
    setlistsData.map(({ show_id, list_array }) => [show_id, list_array])
  );
  const setlistsPromise = db
    .query(insertSetlistQueryStr)
    .then((result) => result.rows);

  await Promise.all([songsPromise, showsPromise, setlistsPromise]);
};
module.exports = seed;
