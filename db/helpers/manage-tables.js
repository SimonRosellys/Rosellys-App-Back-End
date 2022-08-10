const db = require("../connection");

const createTables = async () => {
  const songsTablePromise = db.query(`
    CREATE TABLE songs (
      song_id SERIAL PRIMARY KEY,
      title TEXT,
      lyrics TEXT,
      song_key TEXT,
      instrumentation TEXT,
      composer TEXT,
      notes TEXT
    );`);

  const usersTablePromise = db.query(`CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    pwd TEXT,
    pay INT
    );`);

  const showsTablePromise = db.query(`CREATE TABLE shows (
    show_id SERIAL PRIMARY KEY,
    venue_name TEXT,
    venue_address TEXT,
    show_date DATE,
    soundcheck_time TIME, 
    set_start_time TIME,
    venue_website TEXT,
    line_up TEXT,
    confirmed TEXT,
    player_availability TEXT,
    fee INT,
    paid_in TEXT, 
    paid_out TEXT,
    contact_details TEXT,
    notes TEXT
    );`);

  const setListsTablePromise = db.query(`CREATE TABLE setlists (
    setlist_id SERIAL PRIMARY KEY,
    show_id INT,
    list_array INT[]
    );`);

  await Promise.all([
    songsTablePromise,
    usersTablePromise,
    showsTablePromise,
    setListsTablePromise,
  ]);

  //  MIGHT NEED THIS AWAIT BLOCK AT SOME POINT?
  //   await db.query(`
  //   CREATE TABLE articles (
  //     article_id SERIAL PRIMARY KEY,
  //     title VARCHAR NOT NULL,
  //     topic VARCHAR NOT NULL REFERENCES topics(slug),
  //     author VARCHAR NOT NULL REFERENCES users(username),
  //     body VARCHAR NOT NULL,
  //     created_at TIMESTAMP DEFAULT NOW(),
  //     votes INT DEFAULT 0 NOT NULL
  //   );`);

  //   await db.query(`
  //   CREATE TABLE comments (
  //     comment_id SERIAL PRIMARY KEY,
  //     body VARCHAR NOT NULL,
  //     article_id INT REFERENCES articles(article_id) NOT NULL,
  //     author VARCHAR REFERENCES users(username) NOT NULL,
  //     votes INT DEFAULT 0 NOT NULL,
  //     created_at TIMESTAMP DEFAULT NOW()
  //   );`);
};

const dropTables = async () => {
  await db.query(`DROP TABLE IF EXISTS shows;`);
  await db.query(`DROP TABLE IF EXISTS users;`);
  await db.query(`DROP TABLE IF EXISTS songs;`);
  await db.query(`DROP TABLE IF EXISTS setlists;`);
};

module.exports = { createTables, dropTables };

// NOT WORKING
// const setListsTablePromise = db.query(`CREATE TABLE setlists (
//   setlist_id SERIAL PRIMARY KEY,
//   show_id INT,
//   list_array INT[],
//   );`);
