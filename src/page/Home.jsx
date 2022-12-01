import React from 'react';
import Skeleton from '../components/Skeleton/Skeleton';
import UserNotFound from '../components/UserNotFound';
import UsersList from '../components/UsersList/UsersList';
import ErrorComponent from '../components/ErrorComponent';
import Header from '../components/Header'
import useDebounce from '../hooks/useDebounce';
import UserListSortData from '../components/UsersList/UserListSortData';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/slices/getUsersSlice';


const skeletonList = [1,2,3,4,5,6]

function Home() {

  const {category, checkbox } = useSelector(state => state.filter); 
  const {users} = useSelector((state => state.users))
  const {status} = useSelector((state => state.users))
  const {searchValue} = useSelector(state => state.search);
  const debouncedSearchTerm = useDebounce(searchValue, 1000) 
  const dispatch = useDispatch()
  
  useEffect(() => {
     dispatch(fetchUsers({category, checkbox}))
  }, [category, checkbox]) 
  
  

  let filteredName =  users.filter(item => {
    return item.firstName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) //Фильтрация по строке поиска.
  })

  let renderFilteredNames;
  if (filteredName.length !== 0 && checkbox === 0) {
     renderFilteredNames = filteredName.map((item, index) => {
        return <UsersList key={index} index={index} {...item}/> 
      })
  } else if (filteredName.length !== 0 && checkbox === 1) {
     renderFilteredNames = <UserListSortData filteredName={filteredName}/>
  } else {
     renderFilteredNames = <UserNotFound />
  }
 
  const skeletons =  skeletonList.map((item, index) => <Skeleton key={index} />)
  const errors =  <ErrorComponent/>

  return (
      <div className='container'>
        <Header />
        <div className='all-users'>
          {
           status === 'error' ? errors : 
           status === 'loading' ? skeletons : renderFilteredNames
          }
        </div> 
    </div>
  )
}

export default Home