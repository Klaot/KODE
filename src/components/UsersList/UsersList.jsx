import React from 'react'
import styles from './UserList.module.scss'

function UsersList({firstName, lastName, avatarUrl, position, userTag}) {

  return (
    <div>
        <div className={styles.userList}>
            <img src={avatarUrl} alt='user avatar'/>
            <div className={styles.userItem}>
                <div className={styles.userListHeader}>
                    <h2>{firstName + lastName}</h2>
                    <p id={styles.userTag}>{userTag}</p>
                </div>
              <p>{position}</p>  
            </div>
        </div>
    </div>
  )
}

export default UsersList