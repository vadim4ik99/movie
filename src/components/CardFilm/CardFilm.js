import './CardFilm.css';
import Card from 'react-bootstrap/Card';
import { getYear } from '../../utils/utilsForPage'

function CardFilm(movie) {
  const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
  const {backdrop_path, id, original_title, poster_path, release_date} = movie
  return (
    <Card className='CardFilm'>
      <a href={`/films/${id}`}>
        <Card.Img className='img-card-film' src={imgUrl+poster_path} height="358" width="242" />
      </a>
      <button className='favorite' data-movie-id="{id}" title="Добавить в избранное"></button>
      <Card.Body className='CardFilm_body'>
          <Card.Title className='CardFilm_title'>
            <a href={`/films/${id}`}>{original_title}</a>
          </Card.Title>
          <Card.Text className='CardFilm_info'>
          {getYear(release_date)}
          </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardFilm;