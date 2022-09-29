import React from 'react'
import Categories from '../Categories'
import Search from '../Search'
import styles from './Header.module.scss'

function Header() {

  return (
    <div className={styles.header}>
        <Search />
        <Categories />
    </div>
  )
}

export default Header