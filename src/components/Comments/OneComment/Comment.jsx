import './Comment.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Comment() {
  return (
      <Row className='comment'>
        <Col xs={1} className='leftSideComment'>
          <Image src="https://st.kinovod.net/static/images/avatar.svg" roundedCircle width='50px' height='50px' />
        </Col>
        <Col className='rightSideComment'>
          <Row className='headInfoComment'>
            <span className='nameCommnet'>Гость</span>
            <span className='dataComment'> 24 дек 2023 г. в 15:04</span>
          </Row>
          <Row className='bodyComment'>
            <p>Смотрел этот фильм. Фильм реально ВЫСОКОбюджетный, эффекты супер, на тему дня и пр., и пр., и пр. Есть одно НО! Не сопереживаешь героям. Не ёкает сердце. Не хочется мстить врагам. Серова-то всё.</p>
          </Row>
        </Col>
      </Row>
  );
}

export default Comment;