import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import AuthRegistration from '../../../hoc/ModalAuth';
import './SignIn.css';
import MyButton from '../../Button/MyButton';
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../../Slice/loginSlice'

const user = {
  login: 'test@test.com',
  password: 'test@test.com'
}

function SignIn({show, setShow}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const dispatch = useDispatch()

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setLoginErr(false);
    setPasswordErr(false);   
    if (!login) {
      setLoginErr(true);
    }

    if (!password) {
      setPasswordErr(true);
    }

    if (login && password) {
      if (user.login === login && user.password === password) {
        dispatch(changeStatus())
        localStorage.setItem('isAuth', 'true');
        setShow(false)
      }
    }
  };

  return (
    <>
      {loginErr || passwordErr ? (
        <div className='alertFormModal'>
          {loginErr && <p>Пожалуйста, введите почту</p>}
          {passwordErr && <p>Пожалуйста, введите пароль</p>}
        </div>
      ) : null}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb10" controlId="formGroupEmail">
          <Form.Control
            className='myModal-control'
            type="email"
            placeholder="Почта"
            name="login"
            value={login}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb10" controlId="formGroupPassword">
          <Form.Control
            className='myModal-control'
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </Form.Group>
        <MyButton name='Войти' type="submit" />
      </Form>
      <div style={{ margin: "30px 0 0 0" }}>
        <a href='/login'>Забыли пароль?</a>
        <a href='/login'>Пройти регистрацию</a>
      </div>
    </>
  );
}

SignIn.displayName = 'SignIn';
const SignInWithAuth = AuthRegistration(SignIn, 'Войти');
export default SignInWithAuth;