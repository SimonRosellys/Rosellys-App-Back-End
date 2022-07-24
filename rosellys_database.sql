DROP DATABASE IF EXISTS rosellys_database;
CREATE DATABASE rosellys_database;

\c rosellys_database;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    pwd TEXT,
    pay INT
);

CREATE TABLE songs (
    song_id SERIAL PRIMARY KEY,
    title TEXT,
    lyrics TEXT,
    song_key TEXT,
    instrumentation TEXT,
    composer TEXT
    -- FOREIGN KEY (composer) REFERENCES users(first_name)
);

CREATE TABLE shows (
    show_id SERIAL PRIMARY KEY,
    venue_name TEXT,
    venue_address TEXT,
    show_date DATE,
    soundcheck_time TIME, 
    set_start_time TIME,
    venue_website TEXT,
    line_up TEXT,
    confirmed BOOLEAN,
    player_availability TEXT,
    fee INT,
    paid_in BOOLEAN, 
    paid_out BOOLEAN,
    contact_details TEXT,
    notes TEXT
);


INSERT INTO users(first_name, pwd, pay)
VALUES
('Simon', 'Simonpwd', 0),
('Rebecca', 'Rebeccapwd', 0),
('Allan', 'Allanpwd', 0),
('Matt', 'Mattpwd', 0),
('George', 'Georgepwd', 0);

INSERT INTO songs(title, lyrics, song_key, instrumentation, composer)
VALUES
('Only Way She Knows', 'All the lyrics here', 'E', 'Guitar Pedal Steel', 'Simon'),
('Dont Pull Away', 'More Lyrics here','G', 'Guitar Pedal Steel Electric Bass', 'Rebecca');

INSERT INTO shows(venue_name, venue_address, show_date, soundcheck_time, set_start_time, venue_website, line_up, confirmed, player_availability, fee, paid_in, paid_out, contact_details,notes)

    VALUES('The Bear Club', 
'Luton, somewhere',
    '2022-12-30',
    '13:00:00', 
    '14:00:00',
    'www.Bear.com',
    'Full Band',
    'true',
    'All of us',
    400,
    true, 
    false,
    'Justin Dude',
    'A pretty good gig');

SELECT * FROM users;
SELECT * FROM songs;
SELECT * FROM shows;
-- This connects the two tables
-- JOIN songs
-- ON users.first_name = songs.composer;