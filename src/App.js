import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './page/Home';
import Modal from './components/Modal';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Modal />
    </div>  
  );
}

export default App;
