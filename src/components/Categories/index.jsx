import React from 'react';
import styles from './Categories.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/filterAndSort'

function Categories() {

    const { categoryId } = useSelector(state => state.filter);
    const dispatch = useDispatch()
    
    const categories = ['Все','Дизайн', 'Аналитика', 'Менеджмент', 'iOS', 'Android'];

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((categoryName, index)=> {
                    return (
                        <li key={index}
                            onClick={() => dispatch(setCategory(index))}
                            className={categoryId === index ? 'active' : ''}>
                        {categoryName}
                        </li> 
                    )  
                })}
            </ul>
        </div>
    )
}

export default Categories