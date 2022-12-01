import React from 'react';
import styles from './Categories.module.scss';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/filterAndSort'
import { useState } from 'react';

function Categories() {

    const dispatch = useDispatch()
    
    const categories = ['Все','Дизайн', 'Аналитика', 'Менеджмент', 'iOS', 'Android'];
    const [categoryActivedStyle, setCategoryActivedStyle] = useState(0)

    const heandlerSetCategory = (categoryId) => {
        setCategoryActivedStyle(categoryId)
        let activeCategory = categoryId === 0 ? 'all' 
        : categoryId === 1 ? 'design' 
        : categoryId === 2 ? 'analytics' 
        : categoryId === 3 ? 'management' 
        : categoryId === 4 ? 'ios' 
        : categoryId === 5 ? 'android' : 'all';
        dispatch(setCategory(activeCategory))
    }

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((categoryName, index)=> {
                    return (
                        <li key={index}
                            onClick={() => heandlerSetCategory(index)}
                            id={categoryActivedStyle === index ? styles.active : ''}>
                        {categoryName}
                        </li> 
                    )  
                })}
            </ul>
        </div>
    )
}

export default Categories