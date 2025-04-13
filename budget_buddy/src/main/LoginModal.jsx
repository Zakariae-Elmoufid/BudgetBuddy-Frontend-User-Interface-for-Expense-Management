import React , {useState} from "react";


export default  function  LoginModal ({ isOpen, onClose })  {
  
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  
  if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Login</h2>
            <button 
              onClick={onClose} 
              className="text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>
          
          <form className="space-y-4" 
             onSubmit={(e) => {
              e.preventDefault();
              console.log("Email:", email);
              console.log("Password:", password);
            }}
          >
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email" 
                id="email" 
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2">Password</label>
              <input 
                value={password}
                onChange={(e) =>  setPassword(e.target.value)}
                type="password" 
                id="password" 
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
              />
              <p>{email}</p>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  