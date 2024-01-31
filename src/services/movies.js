import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';
const headers = {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWU4YzUxODA4OWU5YTFmMDY1Yjk0MDI4Zjc3MDA4MyIsInN1YiI6IjY0ZDhlMWFhYjZjMjY0MTE1OGM4Mjk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OL1mGQPLSav-pIaPpmG3QzhgfaqH6BI8D9TlTyLGuls',
};
const lang = 'language=en-US';

class MovieServices {

  async getById(id) {
    try {
      const response = await axios.get(`${url}movie/${id}?${lang}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCastByFilmId(id) {
    try {
      const response = await axios.get(`${url}movie/${id}/credits?${lang}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getYouTubeById(id) {
    try {
      const response = await axios.get(`${url}movie/${id}/videos?${lang}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getCollections(id) {
    try {
      const response = await axios.get(`${url}collection/${id}?${lang}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async searchByTitle(title) {
    try {
      const response = await axios.get(`${url}search/movie?query=${title}&include_adult=false&${lang}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPopular(page) {
    try {
      const response = await axios.get(`${url}movie/popular?language=en-US&page=1`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getTreding(page) {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getByGanres(id, page) {
    try {
      const response = await axios.get(`${url}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getFilms(page) {
    try {
      const response = await axios.get(`${url}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getSerials(page) {
    try {
      const response = await axios.get(`${url}discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }  

  async getByActor(id) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/person/234352/movie_credits?language=en-US'`, { headers });
      console (response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }  
}

export default new MovieServices();
