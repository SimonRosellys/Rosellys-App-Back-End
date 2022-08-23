const {
  // insertShow,
  fetchSetlists,
  // removeShow,
  // updateShow,
  fetchSetlistById,
} = require("../models/setlists.js");

// exports.addShow = (req, res) => {
//   console.log(req.body);
//   insertShow(req.body).then((show) => res.status(201).send({ show }));
// };

exports.getSetlists = (req, res, next) => {
  fetchSetlists().then((setlists) => {
    res.status(200).send(setlists.rows);
  });
};

exports.getSetlistById = (req, res) => {
  const setlist_id = req.params.id;
  fetchSetlistById(setlist_id).then((list) => {
    res.status(200).send(list.rows);
  });
};
