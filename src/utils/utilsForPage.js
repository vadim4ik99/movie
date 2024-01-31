export function findKeyTrailer(videos) {
  const trailerVideo = videos.find(
    video => video.site === 'YouTube' && video.type === 'Trailer' && video.official === true
  );
  const selectedVideo = trailerVideo || videos[0];
  return selectedVideo.key;
}

export function convertToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
  return `${hours}h ${formattedMinutes}min`;
}

export function getEmployeesFilm(arr) {
  const directors = arr.filter( arr => arr.job === 'Director');
  const stories = arr.filter( arr => arr.job === 'Screenplay');
  const operator = arr.filter( arr => arr.job === 'Director of Photography');
  const producers = arr.filter( arr => arr.job === 'Executive Producer');

  return { 
    directors,
    stories,
    operator,
    producers
  };
}

export function getYear (data) {
  const years = data? data.substr(0, 4) : '';
  return years
}