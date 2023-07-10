import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./userContext";
import "./navbar.css";

const Navbar = () => {
  const { setUsername } = useContext(UserContext);

  const handleLogout = () => {
    // Realize as ações de logout aqui, como limpar o token de autenticação, redirecionar para a página de login, etc.
    // Exemplo: Limpar o nome de usuário no contexto
    setUsername("");
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/perfil" activeClassName="active">
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato" activeClassName="active">
            Contato
          </NavLink>
        </li>
        
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        
      </ul>
    </nav>
  );
};

export default Navbar;
