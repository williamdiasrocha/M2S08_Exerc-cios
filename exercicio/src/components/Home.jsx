import React, { useContext } from 'react';
import { UserContext } from './userContext';

const Home = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <p>Bem-vindo, {username}</p>
    </div>
  );
};

export default Home;
