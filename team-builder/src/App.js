import React, { useState } from 'react'
  // import './App.css';

const initialFormValues={
  name: '',
  email:'',
  role:'',
}

function App() {
  const [teamMembers, setTeamMembers] = useState({
    name: 'Chase',
    email: 'monty@zusi.com',
    role: 'teacher',
  })
  
  return (
    <div>
      <h1>{teamMembers.name}</h1>
      <h2>{teamMembers.email}</h2>
      <h3>{teamMembers.role}</h3>
    </div>
  );
}

export default App;
