import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardFilm from '../../components/CardFilm/CardFilm';
import './Main.css'
import Footer from '../../components/Footer/Footer';
import Skeleton from '../../components/Skeleton'
import { usePopularMovie, useTredingMovie } from '../../hooks/useMovie'


function Main() {
  const { isLoading: popularLoading, data: popularData} = usePopularMovie()
  const { isLoading: trendLoading, data: trendData} = useTredingMovie()

  if ((popularLoading || !popularData) && (trendLoading || !trendData)) {
    return (
      <Container fluid className='Main'>
      <a href="#" className='h3 link_h'>
        Трендовые фильмы
      </a>
      <Row xs={6} className="Main_row">

        { popularLoading && Array.from({ length: 6 }, (_, index) => (
            <Col key={index} className='card_film'>
              <Skeleton />
            </Col>
            ))
        }
        
      </Row>
      <a href="#" className='h3 link_h'>
        Популярные фильмы в кинотеатрах
      </a>
      <Row xs={6} className="Main_row">
      {trendLoading && Array.from({ length: 6 }, (_, index) => (
          <Col key={index} className='card_film'>
            <Skeleton />
          </Col>
          ))
        }
      </Row>
      <Footer/>
    </Container>
    )
  }

  return (
    <Container fluid className='Main'>
      <a href="#" className='h3 link_h'>
        Трендовые фильмы
      </a>
      <Row xs={6} className="Main_row">
        {popularData && popularData.results.slice(0, 12).map((movie) => (
          <Col key={movie.id} className='card_film'>
            <CardFilm {...movie} />
          </Col>  
        ))}
      </Row>
      <a href="#" className='h3 link_h'>
        Популярные фильмы в кинотеатрах
      </a>
      <Row xs={6} className="Main_row">
      {trendData && trendData.results.slice(0, 12).map((movie) => (
            <Col key={movie.id} className='card_film'>
              <CardFilm {...movie} />
            </Col>  
          ))
        }
      </Row>
      <Footer/>
    </Container>
  );
}

export default Main;