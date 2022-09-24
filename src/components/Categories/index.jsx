import React from 'react'


function Categories({category, setCategory}) {

    const categories = ['Все','Дизайн', 'Аналитика', 'Менеджмент', 'iOS', 'Android'];

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index)=> {
                    return (
                        <li key={index}
                            onClick={() => setCategory(index)}
                            className={category === index ? 'active' : ''}>
                        {categoryName}
                        </li> 
                    )  
                })}
            </ul>
        </div>
    )
}

export default Categories