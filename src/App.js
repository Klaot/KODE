import Header from './components/Header';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './page/Home';



function App() {

  const [category, setCategory] = useState(0)

  return (
    <div className='container'>
      <Header category={category} setCategory={setCategory}/>
      <Routes>
        <Route path="/" element={<Home category={category}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
