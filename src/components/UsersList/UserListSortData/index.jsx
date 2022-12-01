import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setUserItem} from '../../../store/slices/userItem';
import { Link } from 'react-router-dom';
import styles from './UserList.module.scss'

function UserListSortData({filteredName}) {

    const [users, setUsers] = useState([])
    const { checkbox } = useSelector(state => state.filter);
    const dispatch = useDispatch()

   useEffect(() => {
    function filteredUserBerthday(filteredName) {
        let filteredUser = filteredName.reduce(function (newArr, user) {
          const userMouthBirthday = new Date(user.birthday).getMonth();
          const currentMouth = new Date().getMonth();
          if (userMouthBirthday < currentMouth ) {
            newArr.skipped.push(user);
          } else {
            newArr.will.push(user);
          }
          return newArr;
        }, {skipped:[], will: []});
        setUsers(filteredUser) 
      }
     filteredUserBerthday(filteredName)
   }, []) 

   

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

  const birthdayTransform = (user) => {
    let userBirthdayArry = user.birthday.split('-');
     let foo = new Date(userBirthdayArry[0], userBirthdayArry[1], userBirthdayArry[2]).toLocaleString('ru' , {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    return foo.slice(0,7) + '.'
  }

  let hr = <div className={styles.date2023}>
             <p>2023</p>
           </div>

  return (
    <div>
        {
          users.length === 0 ? null : users.will.map((user, index) => {
            return  <div key={user.id} onClick={() => itemInfo(user.firstName, user.lastName, user.avatarUrl, user.position, user.userTag, user.phone, user.birthday)}>
            <Link className={styles.userAllInfo} id='Link' to={`/user/${index}`}>
              <div className={styles.userList}>
                  <img src={user.avatarUrl} alt='user avatar'/>
                  <div className={styles.userItem}>
                      <div className={styles.userListHeader}>
                          <h2>{user.firstName} {user.lastName}</h2>
                          <p id={styles.userTag}>{user.userTag === 'string' ? '' : user.userTag}</p>
                      </div>
                    <p>{user.position}</p>  
                  </div>
              </div>
              <p className={styles.birthdayDay}>{checkbox === 1 ? birthdayTransform(user) : ''}</p>
              </Link>
          </div>
        })
        }
        {
          users.length !== 0 ?  hr : null
        }
        {
        users.length === 0 ? null : users.skipped.map((user, index) => {
          return  <div key={user.id} onClick={() => itemInfo(user.firstName, user.lastName, user.avatarUrl, user.position, user.userTag, user.phone, user.birthday)}>
                    <Link className={styles.userAllInfo} id='Link' to={`/user/${index}`}>
                      <div className={styles.userList}>
                          <img src={user.avatarUrl} alt='user avatar'/>
                          <div className={styles.userItem}>
                              <div className={styles.userListHeader}>
                                  <h2>{user.firstName} {user.lastName}</h2>
                                  <p id={styles.userTag}>{user.userTag === 'string' ? '' : user.userTag}</p>
                              </div>
                            <p>{user.position}</p>  
                          </div>
                      </div>
                      <p className={styles.birthdayDay}>{checkbox === 1 ? birthdayTransform(user) : ''}</p>
                      </Link>
                  </div>
            })
        } 
    </div>
  )
}

export default UserListSortData