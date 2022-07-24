const {
  insertUser,
  fetchUsers,
  removeUser,
  updateUser,
} = require("../models/users.js");

exports.addUser = (req, res) => {
  insertUser(req.body).then((user) => res.status(201).send({ user }));
};

exports.getUsers = (req, res, next) => {
  fetchUsers().then((users) => {
    console.log(users.rows);
    res.status(200).send(users.rows);
  });
};

exports.deleteUser = (req, res) => {
  const user_id = req.params;
  removeUser(user_id.id).then((removedUser) => {
    res.status(200).send({ removedUser });
  });
};

exports.amendUser = (req, res) => {
  const { id } = req.params;
  const key = Object.keys(req.body)[0];
  const newData = Object.values(req.body)[0];
  updateUser(id, key, newData).then((updatedUser) => {
    res.send(updatedUser);
  });
};
