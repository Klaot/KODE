import React from 'react'
import StarIcon from '../../assets/img/star.png';
import PhoneIcon from '../../assets/img/phone-icon.png';
import styles from './UserPage.module.scss';
import { useSelector } from 'react-redux';


function UserPage() {

  const user =  useSelector(state => state.userItem);
  let foo = user.birthday.split('-');

  return (
    <div className={styles.userPage}>
      <div className={styles.headerInfo}>
        <div className={styles.userInfo}>
          <img src={user.avatarUrl} alt='avatarUrl icon'/>
          <div className={styles.userName}>
             <h1>{user.firstName} {user.lastName}</h1>
             <p>{user.userTag === 'string' ? '' : user.userTag}</p>
          </div>
          <p className={styles.position}>{user.position}</p>
        </div>
      </div>

     <div className={styles.userNumberAndBirthday}>
      <div className={styles.age}>
        <div className={styles.userBirthday}>
          <img src={StarIcon} alt='star-icon'/>
          <h4>{new Date(foo[0], foo[1], foo[2]).toLocaleString('ru' , {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
          </h4>
        </div>
        <p>Возраст: { new Date().getFullYear() - user.birthday.slice(0,4) }</p>
      </div>
      <div className={styles.userNumber}>
        <img src={PhoneIcon} alt='phone-icon'/>
        <h4>{user.phone}</h4>
      </div>
     </div>
    </div>
  )
}

export default UserPage