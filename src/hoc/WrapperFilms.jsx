import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardFilm from './../components/CardFilm/CardFilm';
import Footer from './../components/Footer/Footer';
import PaginationUI from './../components/PaginationUI/PaginationUI';
import NavbarUI from './../components/NavbarUI/NavbarUI';
import { useLocation, useNavigate } from 'react-router-dom';

function WrapperFilms (WrappedComponent, moviesData) {
  return function ListPageWithCommon(props) {
  const navigate = useNavigate();
  const pageParam = new URLSearchParams(useLocation().search).get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  const handlePageChange = (page) => {
    // Update the URL when the page changes
    navigate(`/films?page=${page}`);
  };

  // Return the component JSX after the hooks
  
    };
  }
  
  export default WrapperFilms;