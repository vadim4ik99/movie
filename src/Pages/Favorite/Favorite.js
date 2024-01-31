import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardFilm from '../../components/CardFilm/CardFilm';
import './Favorite.css'
import PaginationUI from '../../components/PaginationUI/PaginationUI';


function Favorite() {
  return (
    <Container fluid className='Main'>
      <h2>Избранное</h2>
      <Row xs={6} className="Main_row">
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col  className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
        <Col xs="2" className='card_film'>
          <CardFilm/>        
        </Col>
      </Row>
      <PaginationUI/>
    </Container>
  );
}

export default Favorite;
