import axios from 'axios';

export async function searchTrendingMovies() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const searchParams = new URLSearchParams({
    api_key: '6b2f249c49a040541fc751a7fb9d7fc1',
  });

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data;
}

export async function searchMovieById(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const searchParams = new URLSearchParams({
    api_key: '6b2f249c49a040541fc751a7fb9d7fc1',
  });

  const response = await axios.get(`${BASE_URL}/${id}?${searchParams}`);
  return response.data;
}
