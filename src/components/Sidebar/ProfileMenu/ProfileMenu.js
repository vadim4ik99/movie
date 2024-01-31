import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import Registration from '../Registration/Registration';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../Slice/loginSlice'
import { useNavigate } from 'react-router-dom';

function ProfileMenu() {
  const history = useNavigate();
  const isAuth = useSelector((state) => state.login.value || localStorage.getItem('isAuth') === 'true');
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);

  const handleLogOut = () => {
    dispatch(logout());
    history('/');
  }

  const obj = {
    'Профиль': '/profile',
    'Избранное': '/favorite',
    'История': '/history',
  };

  return (
    <div className="ProfileMenu">
      <ul>
        {isAuth ? (
          <>
          {Object.keys(obj).map(key => (
            <li key={key}><a href={obj[key]}>{key}</a></li>
          ))}
          <li><a href="#" onClick={handleLogOut}>Выйти</a></li>
        </>
        ) : (
          <>
            <li><a href="#" onClick={handleShow}>Войти</a></li>
            <li><a href="#" onClick={handleShowRegister}>Регистрация</a></li>
          </>
        )}
      </ul>
      {showRegister && <Registration showRegister={showRegister} setShowRegister={setShowRegister} />}
      {show && <SignIn show={show} setShow={setShow}/>} {/* Передаем setIsAuth */}
    </div>
  );
}

export default ProfileMenu;
