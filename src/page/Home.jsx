import React from 'react';
import axios from 'axios';
import Skeleton from '../components/Skeleton/Skeleton';
import UserNotFound from '../components/UserNotFound';
import UsersList from '../components/UsersList/UsersList';
import ErrorComponent from '../components/ErrorComponent';
import Header from '../components/Header'
import useDebounce from '../hooks/useDebounce';
import UserListSortData from '../components/UsersList/UserListSortData';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//__example=${activeCategory}&

const skeletonList = [1,2,3,4,5,6]

function Home() {

  const { categoryId, checkbox  } = useSelector(state => state.filter); // Выбранная категория и способ сортировки.
  const { searchValue } = useSelector(state => state.search); // Состояние строки поиска.
  const [ users, setUsers ] = useState([]) // Массив с пользователями.
  const [ isLoading, setIsLoading ] = useState(true) // Состояние загрузки.
  const [ isError , setIsError ] = useState(false)  // Состояние ошибки
  const debouncedSearchTerm = useDebounce(searchValue, 1000) // Функция отвечающия за задержку запроса при вводе в строку поиска

  
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
    axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${activeCategory}&__dynamic=true`)
      .then((response) => { 
        checkbox === 0 ? setUsers(response.data.items.sort((a,b) => a.firstName.localeCompare(b.firstName))) :
        setUsers(response.data.items) 
        setIsLoading(false);
      }).catch( err => setIsError(true)) 

  }, [categoryId, checkbox, activeCategory, isError,]) 
  


  //Фильтрация по поиску.

  let filteredName =  users.filter(item => {
    return item.firstName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  })
 

  return (
      <div className='container'>
        <Header />
        <div className='all-users'>
          { 
            checkbox === 0 ? // Если выбрана сортировка по алфавиту
            isError ? <ErrorComponent setIsError = {setIsError}/> : // Проверка ошибки
            isLoading ? skeletonList.map((item, index) => <Skeleton key={index} />) : // Если еще идет загрузка показываем скелетон.
            filteredName.length === 0 ? <UserNotFound /> : filteredName.map((item, index) => {
              return <UsersList key={index} index={index} {...item}/> 
            }) : checkbox === 1 ? // Если выбрана сортировка по дате рождения
            isError ? <ErrorComponent setIsError = {setIsError}/> : // Проверка ошибки
            isLoading ? skeletonList.map((item, index) => <Skeleton key={index} />) :// Если еще идет загрузка показываем скелетон.
            filteredName.length === 0 ? <UserNotFound /> : <UserListSortData filteredName={filteredName}/> : null
          }
        </div> 
    </div>
  )
}

export default Home