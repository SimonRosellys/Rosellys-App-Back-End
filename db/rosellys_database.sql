-- I'm not using this - use the seed file. But, this DOES WORK!!
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
    composer TEXT,
    notes TEXT
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

CREATE TABLE setlists (
    setlist_id SERIAL PRIMARY KEY,
    show_id INT,
    list_array INT[]
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
('American Dream', 'Not too much longer til I''ll take you away, not too much longer til we''re ready to play, only 9 more months left til we''re leaving the ground to find our feet in our American dream CHORUS Gonna travel on the open road in a tired out old bay, Gonna travel on the open road, Carolina to LA, Let the rhythm of the music lead us day after day when we find our feet in our American dream Not too much longer til we''re singing our songs, not too much longer til we''re jamming where we belong, only 9 more months left til we''re setting far off to find our feet in our American dream CHORUS x 2', 'E', 'Guitar Pedal Steel', 'Simon'),
('Maryland', '"Hey lady, tell me why, you''re singing out loud all the time, they''re all crazy for your smile, you''re living in everyone''s mind (Chorus) Maryland in ''79 with her cowgirl boots and her head held high, making friends all over the street, doesn''t really matter who she''s gonna, be, see that girl with that look in her eyes, she''s dancing all alone with her head held high, in Maryland oh Maryland, hey lady.Hey lady, singing your songs, you''ll carry through all of the town, something crazy is going on, there''s silence through all of the crowds(Chorus) x2",
','G', 'Guitar Pedal Steel Electric Bass', 'Rebecca');

INSERT INTO shows(venue_name, venue_address, show_date, soundcheck_time, set_start_time, venue_website, line_up, confirmed, player_availability, fee, paid_in, paid_out, contact_details, notes)

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
    'A pretty good gig'),
    ('The Bell Inn', 
'Redbrook',
    '2022-12-30',
    '13:00:00', 
    '14:00:00',
    'www.Bell.com',
    'Duo',
    'true',
    'All of us',
    400,
    true, 
    false,
    'Nick Till',
    'Local');


INSERT INTO setlists( show_id, list_array)
VALUES
(2, ARRAY [1, 2, 3]),
(3, ARRAY [4, 5, 6]),
(1, ARRAY [7, 8, 9]);


SELECT * FROM users;
SELECT * FROM songs;
SELECT * FROM shows;
SELECT * FROM setlists;