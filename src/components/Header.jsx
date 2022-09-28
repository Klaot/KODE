import React from 'react'
import Categories from './Categories'
import Search from './Search'

function Header({setSearchValue, searchValue, setIsActiveModal}) {

  return (
    <div className='header'>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} setIsActiveModal={setIsActiveModal}/>
        <Categories />
    </div>
  )
}

export default Header