import React, { useState, useContext } from 'react';
import { UserContext } from './userContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername: setContextUsername } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setContextUsername(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
