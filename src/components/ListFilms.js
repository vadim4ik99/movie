import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './../components/Footer/Footer';
import PaginationUI from './../components/PaginationUI/PaginationUI';
import NavbarUI from './../components/NavbarUI/NavbarUI';
import CardFilm from './../components/CardFilm/CardFilm';
import { useLocation, useNavigate } from 'react-router-dom';


function ListFilms(props) {
  const { moviesData } = props;
  const pageParam = new URLSearchParams(useLocation().search).get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const navigate = useNavigate();
  console.log(moviesData)

  const handlePageChange = (page) => {
    // Update the URL when the page changes
    navigate(`?page=${page}`);
  };

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
  

export default ListFilms