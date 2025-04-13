import React , { useState } from 'react';


function Header({ onClick }) {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold">Mon Site Web</h1>
      <button 
        onClick={onClick} 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Login
      </button>
    </header>
    );
 }

 export default Header;