import React from 'react';
import NotFoundImg from '../../assets/img/ufo_icon.png';
import styles from './ErrorComponent.module.scss';


function ErrorComponent() {

  return (
    <div className={styles.error}>
        <img src={NotFoundImg} alt='not found img'/>
        <h1>Какой-то сверхразум все сломал</h1>
        <p>Постараемся быстро починить...</p>
        <h4>Попробовать снова</h4>
    </div>
  )
}

export default ErrorComponent