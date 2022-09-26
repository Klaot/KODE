import React from 'react';
import NotFoundImg from '../../assets/img/notfound.png';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className='not-found'>
        <img src={NotFoundImg} alt='not found img'/>
        <h1>Вы сбились с пути!</h1>
        <p>Вы перешли по адресу недоступному в данном приложение.</p>
        <Link to='/'>Вернуться в зону полета..</Link>
    </div>
  )
}

export default NotFound