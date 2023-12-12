import axios from 'axios';

const API_KEY = '6b2f249c49a040541fc751a7fb9d7fc1';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchTrendingMovies() {
  const endpoint = '/trending/movie/day';
  const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  return response.data;
}

export async function searchMovieById(id) {
  const endpoint = `/movie/${id}`;
  const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  return response.data;
}

export async function searchMoviesByQuery(query) {
  const endpoint = '/search/movie';
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    throw new Error("I'm sorry, but something went wrong... Please, try again later");
  }
}

export async function getMovieCredits(id) {
  const endpoint = `/movie/${id}/credits`;
  const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  return response.data;
}

export async function getMovieReviews(id) {
  const endpoint = `/movie/${id}/reviews`;
  const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  return response.data;
}