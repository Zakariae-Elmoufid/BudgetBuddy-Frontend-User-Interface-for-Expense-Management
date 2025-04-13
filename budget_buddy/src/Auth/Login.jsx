import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // Pour envoyer les cookies avec la requête
            body: JSON.stringify({
                email :email,
                password: password
            }),
        });
        

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token); 
            onLogin(); 
            
        }
    } catch (err) {
        alert('An error occurred');
    }
   
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
