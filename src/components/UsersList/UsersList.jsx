import React from 'react';
import styles from './UserList.module.scss';
import { useSelector, useDispatch} from 'react-redux';
import {setUserItem} from '../../store/slices/userItem';
import { Link } from 'react-router-dom';


function UsersList({index, firstName, lastName, avatarUrl, position, userTag, phone, birthday,}) {

  const { checkbox } = useSelector(state => state.filter);
  const dispatch = useDispatch()


  const itemInfo = (firstName, lastName, avatarUrl, position, userTag, phone, birthday) => {
    let itemStore = {
      avatarUrl: avatarUrl, 
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      phone: phone,
      userTag: userTag,
      position: position, 
      }
      dispatch(setUserItem(itemStore));
  }

  const birthdayTransform = () => {
    let userBirthdayArry = birthday.split('-');
     let formatedUserBirthday = new Date(userBirthdayArry[0], userBirthdayArry[1], userBirthdayArry[2]).toLocaleString('ru' , {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    return formatedUserBirthday.slice(0,7) + '.'
  }
 

  return (
    <div  onClick={() => itemInfo(firstName, lastName, avatarUrl, position, userTag, phone, birthday)}>
      <Link className={styles.userAllInfo} id='Link' to={`/user/${index}`}>
        <div className={styles.userList}>
            <img src={avatarUrl} alt='user avatar'/>
            <div className={styles.userItem}>
                <div className={styles.userListHeader}>
                    <h2>{firstName} {lastName}</h2>
                    <p id={styles.userTag}>{userTag === 'string' ? '' : userTag}</p>
                </div>
              <p>{position}</p>  
            </div>
        </div>
        <p className={styles.birthdayDay}>{checkbox === 1 ? birthdayTransform() : ''}</p>
        </Link>
    </div>
  )
}

export default UsersList

