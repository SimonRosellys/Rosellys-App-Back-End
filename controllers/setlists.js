const {
  // insertShow,
  fetchSetlists,
  // removeShow,
  // updateShow,
  // fetchShowById,
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

// exports.getShowById = (req, res) => {
//   const show_id = req.params.id;
//   fetchShowById(show_id).then((show) => {
//     res.status(200).send(show.rows);
//   });
// };
