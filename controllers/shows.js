const {
  insertShow,
  fetchShows,
  removeShow,
  updateShow,
  fetchShowById,
} = require("../models/shows.js");

exports.addShow = (req, res) => {
  console.log(req.body);
  insertShow(req.body).then((show) => res.status(201).send({ show }));
};

exports.getShows = (req, res, next) => {
  fetchShows().then((shows) => {
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
  Object.entries(req.body).forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    updateShow(id, key, value);
  });
};

exports.getShowById = (req, res) => {
  const show_id = req.params.id;
  fetchShowById(show_id).then((show) => {
    res.status(200).send(show.rows);
  });
};
