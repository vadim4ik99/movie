import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './../components/Footer/Footer';
import PaginationUI from './../components/PaginationUI/PaginationUI';
import NavbarUI from './../components/NavbarUI/NavbarUI';
import Skeleton from './../components/Skeleton';

function LoadingFilms() {
    return (
      <Container fluid className='Main'>
        <NavbarUI />
        <Row xs={6} className="Main_row">
          {Array.from({ length: 6 }, (_, index) => (
            <Col key={index} className='card_film'>
              <Skeleton />
            </Col>
          ))}
        </Row>
        <PaginationUI />
        <Footer />
      </Container>
    );
}
  

export default LoadingFilms