const app = require("./app");

app.listen(9090, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port 9090...`);
});
