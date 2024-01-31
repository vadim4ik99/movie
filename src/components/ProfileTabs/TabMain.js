import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TabMain() {
  return (
    <Form>
      <Form.Group className="mb-3 custom-form-group" controlId="formBasicEmail">
        <Form.Label>Имя пользователя</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />        
      </Form.Group>
      <Form.Group className="mb-3 custom-form-group" controlId="formBasicEmail">
        <Form.Label>Електронная почта</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />        
      </Form.Group>
      <Button size="lg" type="submit">
        Изменить
      </Button>
    </Form>
  );
}

export default TabMain;
