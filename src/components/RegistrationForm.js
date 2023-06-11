import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    sessionStorage.setItem('name', name.name)
    sessionStorage.setItem('email', name.email)
    console.log(sessionStorage.getItem('name'))
    console.log(sessionStorage.getItem('email'))
    try {
      <Navigate to="/assessment" replace={true} />
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input type="email" name='email' onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>);
}

export default RegistrationForm;


