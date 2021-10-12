import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form';
import Member from './Member'

const initialValues = {
  name: '',
  email: '',
  role: ''
}


function App() {

  const [teamMember, setTeamMember] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [errorText, setErrorText] = useState('')

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email || !newMember.role) {
      setErrorText('Please enter all fields.')
      return;
    } else {
      setTeamMember([...teamMember, newMember])
      setFormValues(initialValues)
    }
  }

  return (
    <div className="App">
      <h1>Team Members</h1>

      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      errorText={errorText}
      />

      {
        teamMember.map(item => {
          return (
          <Member key={item.role} details={item} />
          )
        })
      }
    </div>
  );
}

export default App;