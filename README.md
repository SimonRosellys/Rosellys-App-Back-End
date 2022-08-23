### **What Does This App Do?**

The Rosellys-App is a band management tool designed to help with the organisation of shows, songs and specific set lists for each show. All of this information can be shared with each member of the band who will each have access to amend or add details.

The Rosellys-App back end is a RESTFUL API and it is designed to respond to users with their chosen endpoints & queries. The app consists of shows, songs, users and setlists. You can use endpoints such as /api/shows to get all shows. Or endpoints like /api/songs/:song_id/ to get the specific song details.
Another example - add a song by doing a POST request to /api/songs - there is a mandatory song-name field, and the rest of the fields are optional

If you would like to interact with the API for POST, PATCH and DELETE request I would recommend using insomnia.

---

### **Get Started**

To get started you can clone this repo by forking it and using your forked repo's clone url OR clone directly from this repo using:

    https://github.com/SimonRosellys/Rosellys-App-Back-End.git

---

### **Install Dependencies**

You can install all dependencies by running:

    npm install

OR:

    npm i

---

### **SEED Your DATABASE**

in the package.json file you'll see:

    "seed": "node ./db/seeds/run-seed.js"

You can run this script by using:

    npm run seed

---

### **.ENV**

To setup your environments you need to create this file:

    .env.development

These should contain the following

.env.development file:

    PGDATABASE=rosellys_database

This needs to be added to your .gitignore if not already.
