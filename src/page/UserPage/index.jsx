import React from 'react'
import StarIcon from '../../assets/img/star.png';
import PhoneIcon from '../../assets/img/phone-icon.png';
import goBackIcon from '../../assets/img/goback.png'
import styles from './UserPage.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function UserPage() {

  const user =  useSelector(state => state.userItem);
  let userBirthday = user.birthday.split('-');
  let fullYears = new Date().getFullYear() - user.birthday.slice(0,4)
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.userPage}>
      <div className={styles.headerInfo}>
        <button className={styles.buttonGoBack} onClick={goBack}><img src={goBackIcon} alt='goBack icon'/></button>
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
          <h4>{new Date(userBirthday[0], userBirthday[1], userBirthday[2]).toLocaleString('ru' , {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
          </h4>
        </div>
        <p>Возраст: {fullYears}</p>
      </div>
      <div className={styles.userNumber}>
        <img src={PhoneIcon} alt='phone-icon'/>
        <a href={`tel:${user.phone}`}><b>{user.phone}</b></a>
      </div>
     </div>
    </div>
  )
}

export default UserPage