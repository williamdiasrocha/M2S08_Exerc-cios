import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/userContext.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Perfil from './components/Perfil.jsx';
import Contato from './components/Contato.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    
    <Router>
      <UserProvider>
        <header>
        <div>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/perfil" element={<Perfil/>} />
          <Route exact path="/contato" element={<Contato/>} />
          </Routes>
        </div>
        </header>
      </UserProvider>
    </Router>
  );
}

export default App;
