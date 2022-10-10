import React from 'react';
import axios from 'axios';
import Skeleton from '../components/Skeleton/Skeleton';
import UserNotFound from '../components/UserNotFound';
import UsersList from '../components/UsersList/UsersList';
import ErrorComponent from '../components/ErrorComponent';
import Header from '../components/Header'
import useDebounce from '../hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const skeletonList = [1,2,3,4,5,6]

function Home() {

  const { categoryId, checkbox  } = useSelector(state => state.filter);
  const { searchValue } = useSelector(state => state.search);
  const [ users, setUsers ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isError , setIsError ] = useState(false)
  const debouncedSearchTerm = useDebounce(searchValue, 1000)
  
  // Использую фильтрацию на стороне сервера. Если бы по запросу возвращалось очень большое количество 
  // пользователей, то делать фильтрацию на стороне клиента могло быть ресурсозатратно и процес бы перегружал устройство.*

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
        checkbox === 1 ? setUsers(response.data.items.sort((a,b) => a.birthday.slice(5,7) - b.birthday.slice(5,7))) : setUsers(response.data.items)
        setIsLoading(false);
      }).catch( err => setIsError(true)) 

  }, [categoryId, checkbox, activeCategory, isError]) 
  

  //Фильтрация по поиску.
  const filteredName = users.filter(item => {
    return item.firstName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  })

  return (
      <div className='container'>
        <Header />
        <div className='all-users'>
          { isError ? <ErrorComponent setIsError = {setIsError}/> : isLoading ? skeletonList.map((item, index) => <Skeleton key={index} />) :
            filteredName.length === 0 ? <UserNotFound /> : filteredName.map((item, index) => {
              return <UsersList key={index} index={index} {...item} />
            }) 
          }
        </div> 
    </div>
  )
}

export default Home