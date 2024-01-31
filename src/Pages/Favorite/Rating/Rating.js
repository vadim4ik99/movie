import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import FavoriteRightMenu from '../../../components/FavoriteRightMenu/FavoriteRightMenu';
import PaginationUI from '../../../components/PaginationUI/PaginationUI';

import './Rating.css'



function Rating() {
  return (
    <Container fluid className='Main'>
      <h2>Оценки</h2>
      <Row className="Main_row">
        <Col md={9}>
          <Table size="sm" className='TablehHistory'>
            <thead>
              <tr>
                <th style={{width:"40%"}}>Название</th>
                <th style={{width:"35%"}} className="text-center">Оценки</th>
                <th style={{width:"20%"}}>Дата</th>
                <th style={{width:"5%"}}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">
                    Невероятный мир глазами Энцо
                  </a> (2019)
                </td>
                <td className="text-center">7</td>
                <td>28 фев 2023 г. в 00:17</td>
                <td className="text-right">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="20" height="20"
                      viewBox="0 0 24 24">
                      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">
                    Невероятный мир глазами Энцо
                  </a> (2019)
                </td>
                <td className="text-center">7</td>
                <td>28 фев 2023 г. в 00:17</td>
                <td>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="20" height="20"
                      viewBox="0 0 24 24">
                      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">
                    Невероятный мир глазами Энцо
                  </a> (2019)
                </td>
                <td className="text-center">7</td>
                <td>28 фев 2023 г. в 00:17</td>
                <td>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="20" height="20"
                      viewBox="0 0 24 24">
                      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                    </svg>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">
                    Невероятный мир глазами Энцо
                  </a> (2019)
                </td>
                <td className="text-center">7</td>
                <td>28 фев 2023 г. в 00:17</td>
                <td>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="20" height="20"
                      viewBox="0 0 24 24">
                      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                    </svg>
                  </a>
                </td>
              </tr>
              
              
            </tbody>
          </Table>         
        </Col>
        <Col md={3}>
          <FavoriteRightMenu/>
        </Col>
      </Row>
      <PaginationUI/>
    </Container>
  );
}

export default Rating;
