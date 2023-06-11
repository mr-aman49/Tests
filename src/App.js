import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import Assessment from './components/Assessment';

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (userDetails) => {
    setUser(userDetails);
  };

  return (
    <div>
      {!user ? <RegistrationForm onRegister={handleRegister} /> : <Assessment user={user} />}
    </div>
  );
};

export default App;
