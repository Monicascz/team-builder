import React, { useState } from 'react'
  // import './App.css';
  import Form from './Form'
  import axios from 'axios'
   
const initialFormValues={
  name: '',
  email:'',
  role:'',
}




function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (evt)=>{
    setFormValues({...formValues, [evt.target.name]: evt.target.value})
  };

  const submitForm = ()=>{
  const newTM = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),    
  }
  if (!newTM.name || !newTM.email || !newTM.role ) return;

  // axios.post("fakeapi.com", newTM)
  // .then((response)=>{
  //   setTeamMembers([response.data, ...teamMembers])
  //   setFormValues(initialFormValues)
  // })
  // .catch((err)=>{
  //   console.log(err,'ERROR')
  // })
  setTeamMembers([...teamMembers, newTM])
    setFormValues(initialFormValues)
}

  return (
    <div>
    <Form values={formValues} update={updateForm} submit={submitForm}/>
      <h1>{teamMembers.name}</h1>
      <h2>{teamMembers.email}</h2>
      <h3>{teamMembers.role}</h3>
    <div className='addedTeamMembers'>
      
    {
      teamMembers.map((teamMember)=>{
      return<div>
      <h1>{teamMember.name}</h1>
      <h2>{teamMember.email}</h2>
      <h3>{teamMember.role}</h3>
      </div>
      })
    }
      
    </div>

    </div>
  );
}

export default App;
