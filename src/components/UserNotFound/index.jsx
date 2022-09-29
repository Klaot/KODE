import React from 'react';
import Glass from '../../assets/img/glass.png';
import styles from './UserNotFound.module.scss';

function UserNotFound() {
  return (
    <div className={styles.userNotFound}>
        <img src={Glass} alt= 'user not found' />
        <h1>Мы никого не нашли</h1>
        <p>Попробуй скорректировать запрос</p>
    </div>
  )}

export default UserNotFound