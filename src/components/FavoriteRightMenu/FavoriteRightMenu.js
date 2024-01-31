import './FavoriteRightMenu.css';
import ListGroup from 'react-bootstrap/ListGroup';


function FavoriteRightMenu() {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item className='custom-list-history active'><a href="#">Просмотры</a></ListGroup.Item>
        <ListGroup.Item className='custom-list-history'><a href="#">Оценки</a></ListGroup.Item>
        <ListGroup.Item className='custom-list-history'><a href="#">Коментарии</a></ListGroup.Item>
      </ListGroup>
      <br></br>
      <a href="#">Очистить все</a>
    </>
  );
}

export default FavoriteRightMenu;