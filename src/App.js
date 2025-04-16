import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://52.77.245.162:4000')  // Replace with your backend URL
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching message:', err));
  }, []);

  return (
    <div>
      <h1>Front-End Example</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
