import React, { useState } from "react";
import { FooterComponent } from "../components/footerComponent";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: username,
      password: password
    };

    fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          console.log(result.message);
          localStorage.setItem('token', result.token);
          navigate('/paginaUsuario');
        }
        else {
          setError(result.message || "Error al ingresar");
        }
      })
      .catch(error => {
        setError("Error al realizar la solicitud");
        console.log(error);
      })

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="images/logo.png" alt="Bootstrap" width="50" height="50" />ODS14
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#objectives" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Objetivos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/#important">Importancia</a></li>
                  <li><a className="dropdown-item" href="/#objectives">Metas</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#groups">Agrupaciones</a>
              </li>
            </ul>
            <div className="signin-button">
              <a href="registro">Registrarse</a>
            </div>
          </div>
        </div>
      </nav><div className="container login">
        <form onSubmit={handleSubmit} id="form-login" className="form-login">
          <div className="titulo">
            <h1 className="titulo">Iniciar sesión</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de usuario:</label>
            <input type="text" id="username" name="username" className="form-control"
              placeholder="Ingrese su nombre de usuario"
              onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input type="password" id="password" name="password" className="form-control"
              placeholder="Ingrese su contraseña"
              onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3 blue-button">
            <button type="submit" className="btn btn-primary">Ingresar</button>
          </div>
          <div className="mb-3 error-message">
            {error && <p className="text-danger">{error}</p>}
          </div>
          <div className="mb-3">
            <a href="registro" className="No_cuenta">¿No tienes una cuenta? Registrate</a>
          </div>
        </form>
      </div>
      <div className='footerComponent'>
        <FooterComponent />
      </div></>
  );
}