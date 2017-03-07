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
-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song(Title, SongLength, ReleaseDate, ArtistId, AlbumId, GenreId)
VALUES('Casimir Pulaski Day', 604, 2005, 29, 27, 8)
--Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in.

SELECT s.Title, alb.Title, art.ArtistName
FROM Song s
LEFT JOIN Album alb ON alb.AlbumId = s.AlbumId
LEFT JOIN Artist art ON art.ArtistId = alb.ArtistId
WHERE art.ArtistName = 'Sufjan Stevens';

--Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.title) FROM Song GROUP BY AlbumId

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.title) FROM Song GROUP BY ArtistId

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

SELECT COUNT(Song.title) FROM Song GROUP BY GenreId
--
-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.

SELECT MAX(AlbumLength), Title FROM Album;

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.

SELECT MAX(SongLength), Title FROM Song;

-- Modify the previous query to also display the title of the album.

SELECT MAX(SongLength), Song.Title, Album.Title
FROM Song
LEFT JOIN Album ON Album.AlbumId = Song.AlbumId
