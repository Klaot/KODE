import React from 'react'
import { useEffect, useState } from 'react'
import Skeleton from '../components/Skeleton/Skeleton'
import UsersList from '../components/UsersList/UsersList'


function Home({category}) {

  const [ users, setUsers ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const skeletonList = [1,2,3,4,5,6]
  let activeCategory = category === 0 ? 'all' 
  : category === 1 ? 'design' 
  : category === 2 ? 'analytics' 
  : category === 3 ? 'management' 
  : category === 4 ? 'ios' 
  : category === 5 ? 'android' : 'all';
  
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${activeCategory}&__dynamic=false`)
      .then((response) => response.json())
      .then((response) => {
        setUsers(response.items);
        setIsLoading(false)
      })
  }, [category])  
     
  return (
    <div className='container'>
        <div className='all-users'>
            { isLoading ? skeletonList.map((item, index) => <Skeleton key={index} />) :
              users.map((item, index) => {
                return <UsersList 
                  key={index}
                  avatarUrl={item.avatarUrl}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  position={item.position}
                  userTag={item.userTag}
                />
              })
           }
        </div>
        
    </div>
  )
}

export default Home