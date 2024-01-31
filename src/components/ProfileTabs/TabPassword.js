import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TabPassword() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="newPassword">
        <Form.Label>Новый пароль</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Повторите пароль</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button size="lg" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TabPassword;
