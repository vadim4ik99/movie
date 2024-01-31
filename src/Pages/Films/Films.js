import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardFilm from '../../components/CardFilm/CardFilm';
import Footer from '../../components/Footer/Footer';
import PaginationUI from '../../components/PaginationUI/PaginationUI';
import NavbarUI from '../../components/NavbarUI/NavbarUI';
import Skeleton from '../../components/Skeleton';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useGetFilms, useGetSerials, useGetByGanre, useFilmsByActor } from '../../hooks/useMovie';

function Films() {
  const { id } = useParams();
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const pageParam = new URLSearchParams(useLocation().search).get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const { isLoading, data: moviesData } = useGetFilms(currentPage);

  const handlePageChange = (page) => {
    // Update the URL when the page changes
    navigate(`/films?page=${page}`);
  };

  if (isLoading) {
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

  // Return the component JSX after the hooks
  return (
    <Container fluid className='Main'>
      <NavbarUI />
      <Row xs={6} className="Main_row">
        {moviesData && moviesData.results.slice(0, 48).map((movie) => (
          <Col key={movie.id} className='card_film'>
            <CardFilm {...movie} />
          </Col>
        ))}
      </Row>
      <PaginationUI 
        currentPage={currentPage}
        totalPages={moviesData.total_pages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </Container>
  );
}

export default Films;
