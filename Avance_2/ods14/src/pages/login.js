import React from "react";
import { FooterComponent } from "../components/footerComponent";

class Login extends React.Component {
  render() {
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
                  <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown"
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
          <form id="form-login" className="form-login">
            <div className="titulo">
              <h1 className="titulo">Iniciar sesión</h1>
            </div>
            <div className="mb-3">
              <label for="username" className="form-label">Nombre de usuario:</label>
              <input type="text" id="username" name="username" className="form-control"
                placeholder="Ingrese su nombre de usuario" required />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">Contraseña:</label>
              <input type="password" id="password" name="password" className="form-control"
                placeholder="Ingrese su contraseña" required />
            </div>
            <div className="mb-3 blue-button">
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
            <div className="mb-3">
              <a href="registro" className="No_cuenta">¿No tienes una cuenta? Registrate</a>
            </div>
          </form>
        </div>
        <div style={{ marginTop:'28vh' }}></div>
        <div className='footerComponent'>
          <FooterComponent />
        </div></>
    );
  }
}

export default Login;