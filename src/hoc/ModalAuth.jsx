import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';

function AuthRegistration (WrappedComponent, title) {
  return function ListPageWithCommon(props) {
    const {show, setShow, setAuth} = props
    console.log('HOC Auth')
    
    const handleClose = () => {
      setShow(false);
    };

    return (
      <Modal show={show} onHide={handleClose} className='myModal'>
      <Modal.Header closeButton>
        <Modal.Title className='myModal_title'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={7}>
              <WrappedComponent {...props}></WrappedComponent>  
            </Col>
            <Col sm={4}></Col> 
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
      );
    };
  }
  
  export default AuthRegistration;