const {
  insertShow,
  fetchShows,
  removeShow,
  updateShow,
} = require("../models/shows.js");

exports.addShow = (req, res) => {
  insertShow(req.body).then((show) => res.status(201).send({ show }));
};

exports.getShows = (req, res, next) => {
  fetchShows().then((shows) => {
    console.log(shows.rows);
    res.status(200).send(shows.rows);
  });
};

exports.deleteShow = (req, res) => {
  const show_id = req.params.id;
  removeShow(show_id).then((removedShow) => {
    res.status(200).send({ removedShow });
  });
};

exports.amendShow = (req, res) => {
  const { id } = req.params;
  const key = Object.keys(req.body)[0];
  const newData = Object.values(req.body)[0];
  updateShow(id, key, newData).then((updatedShow) => {
    res.send(updatedShow);
  });
};
