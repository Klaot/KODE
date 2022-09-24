import React from 'react'
import {useState} from 'react';
import styles from './Search.module.scss';
import Close from '../../assets/img/delete_icon.svg';
import  SearchIcon  from '../../assets/img/search_icon.svg';

function Search() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <section>
        <h1>Поиск</h1>
        <div className={styles.search}>
            <img className={styles.icon} src={SearchIcon} alt='Search icon'/>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder='Введите имя, тег, почту...'/>
            {
            searchValue && <img onClick={() => setSearchValue('')} className={styles.cancel} src={Close} alt='cancel icon'/>
            }
        </div>
    </section>
  )
}

export default Search