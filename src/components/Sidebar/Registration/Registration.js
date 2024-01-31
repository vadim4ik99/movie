import React, { useState } from 'react';
import AuthRegistration from '../../../hoc/ModalAuth';
import Form from 'react-bootstrap/Form';
import MyButton from '../../Button/MyButton';


function Registration({ show, setShow }) {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setCongirmPassword] = useState('');
  const [err, setErr] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    }
     else if (name === 'text') {
      setLogin(value);
    }
    else if (name === 'confirmpassword') {
      setCongirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb10" controlId="formGroupLogin">
          <Form.Control className='myModal-control' type="text" placeholder="Логин" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb10" controlId="formGroupEmail">
          <Form.Control className='myModal-control' type="email" placeholder="Почта" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb10" controlId="formGroupPassword">
          <Form.Control className='myModal-control' type="password" placeholder="Пароль" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb10" controlId="formGroupPassword2">
          <Form.Control className='myModal-control' name='confirmpassword' type="password" placeholder="Повторите пароль" onChange={handleInput} />
        </Form.Group>
        <MyButton name='Зарегестрироваться'/>
      </Form>
      <div style={{ margin: "30px 0 0 0" }}>
        <a href='/login'>Войти</a>
      </div>
    </>
  );
}

Registration.displayName = 'Registration';
export default AuthRegistration(Registration, "Регистация");