const app = require("./app");

const { PORT = 9090 } = process.env;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on ${PORT}...`);
});

// const app = require("./app");

// app.listen(9090, (err) => {
//   if (err) throw err;
//   console.log(`Server is listening on port 9090...`);
// });
