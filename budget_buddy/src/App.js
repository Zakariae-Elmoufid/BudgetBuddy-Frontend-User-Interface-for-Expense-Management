import React  ,{useState} from 'react';

import Header from './main/Header';
import Footer from './main/Footer';
import LoginModal from './main/LoginModal';


import Expenses from './Expenses/Expenses';
import Login from './Auth/Login';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Header onClick={openModal}  />
        <LoginModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
      <Expenses/>
      <Footer/>
    </div>
  );
}

export default App;
