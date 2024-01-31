import MovieServices from "../services/movies";
import { useQuery } from "@tanstack/react-query"

export const useMovieCast = (id) => {
  return useQuery(['movieCast', id], async () => {
    const castData = await MovieServices.getCastByFilmId(id);
    return castData
  });
};

export const useCollection = (id) => {
  return useQuery(['collectionMovies', id], async () => {
    const collectionData = await MovieServices.getCollections(id);
    return collectionData
  });
};

export const useMovieId = (id) => {
  return useQuery(['movieId', id], async () => {
    const movieData = await MovieServices.getById(id);
    return movieData;
  });
};

export const usePopularMovie = () => {
  return useQuery(['PopularMovie'], async () => {
    const data = await MovieServices.getPopular();
    return data
  });
};

export const useTredingMovie = () => {
  return useQuery(['TredingMovie'], async () => {
    const data = await MovieServices.getTreding();
    return data
  });
};

export const useYouTubeById = (id) => {
  return useQuery(['useYouTubeById', id], async () => {
    const youTubeData = await MovieServices.getYouTubeById(id);
    return youTubeData
  });
};

export const useGetByGanre = (id) => {
  return useQuery(['useGetByGanre', id], async () => {
    const data = await MovieServices.getByGanres(id);
    return data
  });
};

export const useGetSerials = () => {
  return useQuery(['useGetSerials'], async () => {
    const data = await MovieServices.getSerials();
    return data
  });
};

export const useGetFilms = (page) => {
  return useQuery(['useGetByGanre', page], async () => {
    const data = await MovieServices.getFilms(page);
    return data
  });
}

export const useFilmsByActor = (id) => {
    return useQuery(['useFilmsByActor', id], async () => {
      const data = await MovieServices.getByActor(id);
      console.log('hook actor');
      console.log(data);
      return data
    });
};