import NotFound from './components/NotFound';
import Home from './page/Home';
import Modal from './components/Modal';
import { Routes, Route } from "react-router-dom";
import UserPage from './page/UserPage';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:userId" element={<UserPage />}/>
      </Routes>
      <Modal />
    </div>  
  );
}

export default App;
