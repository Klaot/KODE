import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './page/Home';
import Modal from './components/Modal';



function App() {

  const [isActiveModal, setIsActiveModal] = useState(true)
  const [category, setCategory] = useState(0)
  const [check, setCheck] = useState(0)
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='container'>
      <Header 
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        check={check} 
        category={category} 
        setCategory={setCategory} 
        setIsActiveModal={setIsActiveModal}/>
      <Routes>
        <Route path="/" element={<Home setSearchValue={setSearchValue} searchValue={searchValue} check={check} category={category}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Modal 
        check={check} 
        setCheck={setCheck} 
        isActiveModal={isActiveModal} 
        setIsActiveModal={setIsActiveModal}/>
    </div>
    
  );
}

export default App;
