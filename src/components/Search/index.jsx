import React from 'react'
import styles from './Search.module.scss';
import Close from '../../assets/img/delete_icon.svg';
import  SearchIcon  from '../../assets/img/search_icon.svg';
import SortIcon from '../../assets/img/sort-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/search';
import { setActiveModal } from '../../store/slices/activeModal';

function Search() {

  const { searchValue } = useSelector(state => state.search);
  const dispatch = useDispatch();

  return (
    <section>
        <h1>Поиск</h1>
        <div className={styles.search}>
            <img className={styles.icon} src={SearchIcon} alt='Search icon'/>
            <input value={searchValue} onChange={(e) => dispatch(setSearchValue(e.target.value))} className={styles.input} placeholder='Введите имя, тег, почту...'/>
            {
              searchValue && <img onClick={() => dispatch(setSearchValue(''))} className={styles.cancel} src={Close} alt='cancel icon'/>
            } 
            <img onClick={() => dispatch(setActiveModal(false))} className={searchValue ? styles.sortActive : styles.sort } src={SortIcon} alt='sort icon'/>
            {
              searchValue && <button onClick={() => dispatch(setSearchValue(''))} className={styles.buttonClear}>Отмена</button>
            } 
        </div>
    </section> 
  )
}

export default Search