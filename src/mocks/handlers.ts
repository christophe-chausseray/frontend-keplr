import { rest } from 'msw';

const FAKE_MOVIES = [
  {
    id: 1,
    title: 'Red Dot',
    poster_path: '/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg',
    overview: 'Red Dot is a science-fi movie',
    vote_average: 7.8,
  },
  {
    id: 2,
    title: 'Below Zero',
    poster_path: '/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg',
    overview: 'Below Zero is an horror movie',
    vote_average: 5,
  },
  {
    id: 3,
    title: 'Mortal Kombat Legends',
    poster_path: '/4VlXER3FImHeFuUjBShFamhIp9M.jpg',
    overview: 'Mortal Kombat Legends is a fight movie',
    vote_average: 9,
  },
];

const handlers = [
  // Get the most popular movies
  rest.get('https://api.themoviedb.org/3/movie/popular', (req, res, ctx) => {
    return res(
      ctx.json({
        results: FAKE_MOVIES,
      })
    );
  }),

  // Get the movies searched
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    const searchValue = req.url.searchParams.get('query');

    const moviesFiltered = FAKE_MOVIES.filter((movie) => searchValue && movie.title.indexOf(searchValue) > -1);

    return res(
      ctx.json({
        results: moviesFiltered,
      })
    );
  }),

  // Get the movie details
  rest.get('https://api.themoviedb.org/3/movie/:movieId', (req, res, ctx) => {
    const { movieId } = req.params;

    const movieFound = FAKE_MOVIES.find((movie) => movie.id === Number(movieId));

    return res(ctx.json(movieFound));
  }),
];

export default handlers;
