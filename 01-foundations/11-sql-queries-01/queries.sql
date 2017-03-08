-- SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
-- SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;

-- Query all of the entries in the Genre table
SELECT * FROM Genre;
-- Using the INSERT statement, add one of your favorite artists to the Artist table.
INSERT INTO Artist(ArtistName, YearEstablished)
VALUES ('Sufjan Stevens', 2000);
-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.
INSERT INTO Album(Title, ReleaseDate, AlbumLength, Label, ArtistId, GenreId)
VALUES('Illinois', 2005, 7359, 'Asthmatic Kitty', 29, 8)

INSERT INTO Album
VALUES(null, 'Illinois', '2005/02/02', 7359, 'Asthmatic Kitty',
  (SELECT ArtistId FROM Artist WHERE ArtistName = "Sufjan Stevens"),
  (SELECT GenreId FROM Genre WHERE label = '8'));
-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song(Title, SongLength, ReleaseDate, ArtistId, AlbumId, GenreId)
VALUES('Casimir Pulaski Day', 604, 2005, 29, 27, 8)

--alt way to do it
INSERT INTO Song
VALUES(null, 'Casimir Pulaski Day', 604, '2005',
(SELECT GenreId FROM Genre WHERE label = 'Bluegrass'),
(SELECT ArtistId FROM Artist WHERE ArtistId = 29),
(SELECT AlbumId FROM Album WHERE AlbumId = 30));
--Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in.

SELECT s.Title, alb.Title, art.ArtistName
FROM Song s
LEFT JOIN Album alb ON alb.AlbumId = s.AlbumId
LEFT JOIN Artist art ON art.ArtistId = alb.ArtistId
WHERE art.ArtistName = 'Sufjan Stevens';



--Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.title) FROM Song GROUP BY AlbumId


SELECT Album.title, COUNT(Song.title)
FROM Song
WHERE Album.AlbumId = Song.AlbumId
GROUP BY Album

--in class
SELECT Album.Title,
COUNT(Song.Title)
FROM Album, Song
ON Album.AlbumId = Song.AlbumId
GROUP BY Album.Title


-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.Title) FROM Song GROUP BY ArtistId

-- in class
SELECT Artist.ArtistName,
Count(Song.Title)
FROM Artist, Song
ON Artist.Artistid = Song.ArtistId
GROUP BY Artist.ArtistName

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.Title) FROM Song GROUP BY GenreId


-- //in class
SELECT Genre.Label,
COUNT(Song.Title)
FROM Genre, Song
ON Genre.GenreId = Song.GenreId
GROUP BY Genre.Label
--
-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.

SELECT MAX(AlbumLength), Title FROM Album;
SELECT MAX(AlbumLength) AS Duration, Title FROM Album;


-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.

SELECT MAX(SongLength), Title FROM Song;
SELECT MAX(SongLength) AS 'Song Length', Title FROM Song;


-- Modify the previous query to also display the title of the album.

SELECT MAX(SongLength), Song.Title, Album.Title
FROM Song
LEFT JOIN Album ON Album.AlbumId = Song.AlbumId
