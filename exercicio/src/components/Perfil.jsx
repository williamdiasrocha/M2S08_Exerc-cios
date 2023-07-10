import React, { useContext, useState } from "react";
import { UserContext } from "./userContext";
import "./Perfil.css"

const Perfil = () => {
  const { username, setUsername } = useContext(UserContext);
  const [newUsername, setNewUsername] = useState(username);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [items, setItems] = useState([]);

  const handleSave = (e) => {
    e.preventDefault();
    setUsername(newUsername);

    const newItem = {
      name,
      email,
      bio,
    };
    setItems([...items, newItem]);

    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div className="container">
      <h2>Editar Perfil</h2>
      <form className="form" onSubmit={handleSave}>
        <label>
          Nome de Usuário:
          <input
            placeholder="Digite seu email"
            type="email"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nome:
          <input
            placeholder="Digite seu Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            placeholder="Digite seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            placeholder="Fale sobre você"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>

      <h2>{name}</h2>
      <ul className="items">
        {items.map((item, index) => (
          <li key={index}>
            <strong>Nome:</strong> {item.name}
            <br />
            <strong>Email:</strong> {item.email}
            <br />
            <strong>Bio:</strong> {item.bio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perfil;
