import React from 'react'
import styles from './Search.module.scss';
import Close from '../../assets/img/delete_icon.svg';
import  SearchIcon  from '../../assets/img/search_icon.svg';
import SortIcon from '../../assets/img/sort-icon.png';

function Search({searchValue, setIsActiveModal, setSearchValue}) {

  return (
    <section>
        <h1>Поиск</h1>
        <div className={styles.search}>
            <img className={styles.icon} src={SearchIcon} alt='Search icon'/>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder='Введите имя, тег, почту...'/>
            {
              searchValue && <img onClick={() => setSearchValue('')} className={styles.cancel} src={Close} alt='cancel icon'/>
            }
            <img onClick={() => setIsActiveModal(false)} className={styles.sort} src={SortIcon} alt='sort icon'/>
        </div>
    </section>
  )
}

export default Search