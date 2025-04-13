import React, { useState, useEffect } from 'react';

function Expenses() {
  const [expenses, setExpenses] = useState([]);
   console.log(expenses);
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      fetch('http://localhost:8000/api/expenses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erreur lors du chargement');
          }
          return response.json();
        })
        .then(data => {
          setExpenses(data.data);
        })
        .catch(error => {
          console.error('Erreur de récupération des dépenses:', error);
        });
    } else {
      console.error('Aucun token trouvé');
    }
  }, []);

  function modifierDepense(id) {
    console.log("Modifier dépense ID:", id);
  }

  function supprimerDepense(id) {
    console.log("Supprimer dépense ID:", id);
  }

  return (
    <div>
      <h2>Liste de vos Dépenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <h3>{expense.title}</h3>
            <p>{expense.description}</p>
            <p>Montant: ${expense.amount}</p>
            <button onClick={() => modifierDepense(expense.id)}>Modifier</button>
            <button onClick={() => supprimerDepense(expense.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
