import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Imdb from '../../components/imdb';
import YouTubeTrailer from '../../components/YouTubeTrailer'
import { useMovieCast, useMovieId, useYouTubeById } from '../../hooks/useMovie';
import { findKeyTrailer, convertToTime, getEmployeesFilm, getYear } from '../../utils/utilsForPage';

import './SingleFilm.css'
import CollectionList from '../../components/collectionList';
import CommentsBlock from '../../components/Comments/CommentsBlock';

function SingleFilm() {

  const {title} = useParams();
  const {isLoading, data: movieData} = useMovieId(title);
  const castData = useMovieCast(title).data;
  const youTubeData = useYouTubeById(title).data;
   /// Need to do smt with youtube if we don`t have trailer. maybe skeleton?
  const imgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'

  if (isLoading || !movieData || !castData || !youTubeData) {
    return <p>Loading...</p>;
  }
  console.log(castData)

  const years = getYear(movieData.release_date);

  const employees = getEmployeesFilm(castData.crew)

  return (
    <>
      <Container fluid className='Main'>
        <h2>{movieData.original_title}</h2>
        <h4>{movieData.tagline}</h4>
        <Row>
          <Col md={9}>
            <Row>
              <Col className='poster' md={3}>
                <Image src={imgUrl + movieData.poster_path} style={{ width: '100%', height: 'auto' }}/>
                <div className="raiting-movie">
                  <div></div>
                  <p>Оценка: {movieData.vote_average} ({movieData.vote_count} голоса)</p>
                </div>
              </Col>
              <Col>
                <Row className='details'>
                <ul>
                  <li><b>Год:</b> <a href='#'>{years}</a></li>
                  <li><b>Странна: </b> 
                  {movieData.production_countries.map((item) => (
                      <a key={item.iso_3166_1} href={`/country/${item.iso_3166_1}`}>{item.name} </a>
                    ))}
                  </li>
                  <li><b>Жанр: </b> 
                    {movieData.genres.map((item) => (
                      <a key={item.id} href={`/ganres/${item.id}`}>{item.name} </a>
                    ))}
                  </li>
                  <li><b>Режиссер: </b>
                    {employees.directors.map((director) => (
                      <a key={director.id} href={`/directors/${director.id}`}>{director.name} </a>
                    ))}
                  </li>
                  <li><b>Сценарий: </b> 
                    {employees.stories.map((story) => (
                      <a key={story.id} href={`/stories/${story.id}`}>{story.name} </a>
                    ))}
                  </li>
                  <li><b>Продюсер: </b> 
                    {employees.producers.map((producer) => (
                      <a key={producer.id} href={`/producers/${producer.id}`}>{producer.name} </a>
                    ))}
                  </li>
                  {(employees.operator.length >= 1) && 
                    <li>
                      <b>Оператор: </b> 
                        <a href={`/operators/${employees.operator[0].id}`}>
                          {employees.operator[0].name}
                        </a>
                    </li> 
                  }
                  <li><b>Продолжительность: </b>{convertToTime(movieData.runtime)}</li>
                  <li><b>Актеры: </b>
                  {castData.cast.slice(0, 10).map((item) => (
                      <a key={item.cast_id} href={`/actor/${item.id}`}>{item.name} </a>
                    ))}
                  </li>
                  <li><b>Рейтнг IMDb:</b> <Imdb id={movieData.imdb_id}/></li>
                </ul>
                </Row>
                <Row className='description-movie'>
                  <p>{movieData.overview}</p> 
                </Row>
              </Col>
            </Row>
            <Row className='collections'>
              
              {(movieData.belongs_to_collection && <CollectionList id={movieData.belongs_to_collection.id} /> )}

            </Row>
            <Row className='watch'>
              <Row>
                <Tabs
                  defaultActiveKey="online"
                  id="uncontrolled-tab-example"
                  className="custom-tabs"
                >
                  <Tab eventKey="online" title="Смотреть онлайн">
                  </Tab>
                  <Tab eventKey="trailer" title="Трейлер">
                    <YouTubeTrailer id = {findKeyTrailer(youTubeData.results)}/>
                  </Tab>
                </Tabs>
              </Row>
              <Row>

              </Row>
              <Row className='movie-ads-info'>
                <p>Присутствует встроеная реклама.</p> 
                <p>Данную рекламу встраивают релиз-группы, а не наш сайт. Мы не несем никакой ответственности за ее содержание.</p> 
                <p>Вы можете посмотреть сейчас с рекламой, либо дождаться лицензии и смотреть уже без рекламы.</p>  
              </Row>
              
            </Row>
            <CommentsBlock/>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleFilm;