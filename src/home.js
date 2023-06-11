
import React, { useState } from 'react';

import Assessment from './components/Assessment';
import RegistrationForm from './components/RegistrationForm';



const Home = () => {

 const [user, setUser] = useState({
  name: sessionStorage.getItem('name') || null,
  email: sessionStorage.getItem('email') || null
 }
 );

 if (sessionStorage.getItem('name') == null) {
  return <RegistrationForm />
 }

 return (<div>
  {!user == null ? <RegistrationForm /> : <Assessment />}</div>);
}

export default Home;