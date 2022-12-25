import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '693166b0b43bdf507fbf204c77b82397';

export const getMovies = async () => {
  const config = {
    params: {
      api_key: API_KEY,
      include_adult: false,
    },
  };
  const responce = await axios.get('/trending/movie/day', config);

  return responce;
};

export const getMovieBySearch = async query => {
  const config = {
    params: {
      api_key: API_KEY,
      include_adult: false,
      query,
    },
  };
  const responce = await axios.get('/search/movie', config);

  return responce;
};

export const getMovieDetailsById = async id => {
  const config = {
    params: {
      api_key: API_KEY,
      include_adult: false,
    },
  };
  const responce = await axios.get(`/movie/${id}`, config);

  return responce;
};

export const getMovieCredits = async id => {
  const config = {
    params: {
      api_key: API_KEY,
      include_adult: false,
    },
  };
  const responce = await axios.get(`/movie/${id}/credits`, config);

  return responce;
};

export const getMovieReviews = async id => {
  const config = {
    params: {
      api_key: API_KEY,
      include_adult: false,
    },
  };
  const responce = await axios.get(`/movie/${id}/reviews`, config);

  return responce;
};
