const { Client } = require("pg");

const client = new Client();

client
  .connect()
  .then(() => {
    console.log(`connected to ${process.env.PGDATABASE}!`);
  })
  .catch((err) => {
    console.log("connection error:", err);
  });
