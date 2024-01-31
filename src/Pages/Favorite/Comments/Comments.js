import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './Comments.css'
import FavoriteRightMenu from '../../../components/FavoriteRightMenu/FavoriteRightMenu';
import PaginationUI from '../../../components/PaginationUI/PaginationUI';


function Comments() {
  return (
    <Container fluid className='Main'>
      <h2>Комментарии</h2>
      <Row className="Main_row">
        <Col md={9}>
          <Table className='TablehHistory'>
            <tbody>
              <tr>
                <td style={{width:"95%"}}>
                  <p>
                  А сколько такие летчики мирных людей убили в Сирии...
В кино они тут белые и пушистые, а в жизни все не так.
Относительно фильма, норм 7/10
                  </p>
                  <p>
                    <span className='text-muted'>8 фев 2022 г. в 21:13</span>
                    &nbsp;—&nbsp;  
                    <a href="#">Небо</a>
                    &nbsp;(2020)
                  </p>
                </td>
                <td style={{width:"5%"}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="18" height="18"
                      viewBox="0 0 24 24">
                      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                    </svg>
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

export default Comments;
