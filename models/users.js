const db = require("../db/connection");

exports.insertUser = (newUser) => {
  const { first_name, pwd, pay } = newUser;
  console.log(newUser);
  return db
    .query(
      "INSERT INTO users ( first_name, pwd, pay) VALUES ($1, $2, $3) RETURNING *;",
      [first_name, pwd, pay]
    )
    .then(({ rows }) => rows[0]);
};

exports.fetchUsers = () => {
  return db.query("SELECT * FROM users");
};

exports.removeUser = (user_id) => {
  return db.query("DELETE FROM users WHERE user_id = $1", [user_id]);
};

exports.updateUser = (user_id, key, newData) => {
  return db
    .query(`UPDATE users SET ${key} = $1 WHERE user_id = $2 RETURNING *; `, [
      newData,
      user_id,
    ])
    .then((result) => {
      return result.rows[0];
    });
};
