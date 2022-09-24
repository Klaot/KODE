import React from 'react'
import Categories from './Categories'
import Search from './Search'

function Header({category, setCategory}) {

  return (
    <div className='header'>
        <Search />
        <Categories category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Header