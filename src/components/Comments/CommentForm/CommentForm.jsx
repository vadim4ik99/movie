import './CommentForm.css'
import Form from 'react-bootstrap/Form';
import MyButton from '../../Button/MyButton'
import { Row } from 'react-bootstrap';

function CommentForm() {
  return (
    <Row className='commentForm'>
      <Row className='commentCountTitle'>
        <span id='numberOfComments'>15</span>comments.
      </Row>
      <Form className="addCommentForm">
        <Form.Control as="textarea" rows={3} className="customTextarea" /> 
        <MyButton name='Добавить'/>   
      </Form>
    </Row>
  );
}

export default CommentForm;