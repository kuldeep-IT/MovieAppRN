const apikey = '91362a88274839fc57ffe3bb20ffef9e';
const apiAccessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM2MmE4ODI3NDgzOWZjNTdmZmUzYmIyMGZmZWY5ZSIsInN1YiI6IjY0ZDJmNGU4MDM3MjY0MDExYzA1MTc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wcAow4hTI2vnUbbEqDX5KpPfmD7jl2EEFzQPNqkMQcY';

export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};
export const movieCastDetails = (id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};
