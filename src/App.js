import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './page/Home';
import Modal from './components/Modal';


function App() {

  const [isActiveModal, setIsActiveModal] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='container'>
      <Header 
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setIsActiveModal={setIsActiveModal}/>
      <Routes>
        <Route path="/" element={<Home setSearchValue={setSearchValue} searchValue={searchValue} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Modal 
        isActiveModal={isActiveModal} 
        setIsActiveModal={setIsActiveModal}/>
    </div>
    
  );
}

export default App;
