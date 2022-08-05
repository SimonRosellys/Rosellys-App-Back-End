

sudo service postgresql start  // Starting PostgreSQL 12 database server

psql  // you only need this if you want to use the PSQL command line

npm run dev // start the app and get the server listening

psql -f view-db.sql > view-db.txt // Pipe current databases

node ./db/seeds/run-seed.js // Seed and reset DBs
