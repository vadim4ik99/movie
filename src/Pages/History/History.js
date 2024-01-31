import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardFilm from '../../components/CardFilm/CardFilm';
import PaginationUI from '../../components/PaginationUI/PaginationUI';
import Footer from '../../components/Footer/Footer';
import FavoriteRightMenu from '../../components/FavoriteRightMenu/FavoriteRightMenu'

import './History.css'

function History() {
  return (
    <Container fluid className='Main'>
      <h2>Просмотры</h2>
      <Row className="Main_row">
        <Col md={9}>
          <Row xs={4}>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          <Col className='card_film'>
            <CardFilm/> 
          </Col>
          </Row>
        </Col>
        <Col md={3}>
          <FavoriteRightMenu/>
        </Col>
      </Row>
      <PaginationUI />
      <Footer/>
    </Container>
  );
}

export default History;
