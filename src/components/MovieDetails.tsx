import React from 'react';
import Movie from '../model/movie';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0px 20px;
`;

type MovieDetailsProps = {
  movieId: string;
}

const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const [movie, setMovie] = React.useState<Movie| null>(null);

  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5dcff845c097b0973ebee6ea9eb9eaef`);
      const movieFromResponse = await response.json();

      setMovie(movieFromResponse);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return (
      <p>No movie found for this Id !</p>
    );
  }


  return (
    <Container>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{movie.vote_average} / 10</p>
      </div>
      {movie.poster_path && (
        <img aria-label={movie.title} src={'http://image.tmdb.org/t/p/w185' + movie.poster_path} alt={movie.title} />
      )}
    </Container>
  );
}

export default MovieDetails;
