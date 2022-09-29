import React from 'react';
import NotFoundImg from '../../assets/img/notfound.png';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

function NotFound() {

  return (
    <div className={styles.notFound}>
        <img src={NotFoundImg} alt='not found img'/>
        <h1>Вы сбились с пути!</h1>
        <p>Вы перешли по адресу недоступному в данном приложение.</p>
        <Link to='/'>Вернуться в зону полета..</Link>
    </div>
  )
}

export default NotFound