const db = require("../db/connection");

exports.fetchSetlists = () => {
  return db.query("SELECT * FROM setlists");
};

exports.fetchSetlistById = (setlist_id) => {
  return db.query("SELECT * FROM setlists WHERE setlist_id = $1", [setlist_id]);
};
