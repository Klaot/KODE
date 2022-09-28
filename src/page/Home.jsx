import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import Skeleton from '../components/Skeleton/Skeleton'
import UserNotFound from '../components/UserNotFound'
import UsersList from '../components/UsersList/UsersList'


function Home({ searchValue }) {

  const { categoryId, checkbox  } = useSelector(state => state.filter);
  const [ users, setUsers ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const skeletonList = [1,2,3,4,5,6]


  let activeCategory = categoryId === 0 ? 'all' 
  : categoryId === 1 ? 'design' 
  : categoryId === 2 ? 'analytics' 
  : categoryId === 3 ? 'management' 
  : categoryId === 4 ? 'ios' 
  : categoryId === 5 ? 'android' : 'all';
  
  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${activeCategory}&__dynamic=false`)
      .then((response) => { 
        checkbox === 0 ? setUsers(response.data.items.sort((a,b) => a.firstName.localeCompare(b.firstName))) :
        checkbox === 1 ? setUsers(response.data.items.sort((a,b) => a.birthday - b.birthday)) : setUsers(response.data.items)
        setIsLoading(false);
      })
  }, [categoryId, checkbox]) 
  
  const filteredName = users.filter(item => {
    return item.firstName.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
      <div className='container'>
        <div className='all-users'>
          { isLoading ? skeletonList.map((item, index) => <Skeleton key={index} />) :
            filteredName.length === 0 ? <UserNotFound /> : filteredName.map((item, index) => {
              return <UsersList 
                key={index}
                avatarUrl={item.avatarUrl}
                firstName={item.firstName}
                lastName={item.lastName}
                position={item.position}
                userTag={item.userTag === 'string' ? '' : item.userTag}
              />
            })
          }
        </div> 
    </div>
  )
}

export default Home