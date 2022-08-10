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

// exports.deleteShow = (req, res) => {
//   const show_id = req.params.id;
//   removeShow(show_id).then((removedShow) => {
//     res.status(200).send({ removedShow });
//   });
// };

// exports.amendShow = (req, res) => {
//   const { id } = req.params;
//   // console.log(req.params);
//   const key = Object.keys(req.body)[0];
//   const newData = Object.values(req.body)[0];
//   updateShow(id, key, newData).then((updatedShow) => {
//     res.send(updatedShow);
//   });
// };

exports.getSetlistById = (req, res) => {
  const setlist_id = req.params.id;
  fetchSetlistById(setlist_id).then((list) => {
    res.status(200).send(list.rows);
  });
};
