import React from 'react'
import Categories from './Categories'
import Search from './Search'

function Header({setSearchValue, searchValue, category, setCategory, setIsActiveModal}) {

  return (
    <div className='header'>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setIsActiveModal={setIsActiveModal}/>
        <Categories category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Header