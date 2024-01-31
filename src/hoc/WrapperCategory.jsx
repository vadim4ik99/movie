import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer/Footer';
import PaginationUI from '../components/PaginationUI/PaginationUI';
import NavbarUI from '../components/NavbarUI/NavbarUI';


function WrapperCategory (WrappedComponent, pageTitle) {
  return function ListPageWithCommon(props) {
    return (
      <Container fluid className='Main'>
        <NavbarUI pageTitle={pageTitle}/>
        <Row xs={6} className="Main_row">
          <WrappedComponent {...props} />
        </Row>
        <PaginationUI/>
        <Footer/>
      </Container>
      );
    };
  }
  
  export default WrapperCategory;