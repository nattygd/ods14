import React from "react";
import { RegionesComponent } from "../components/regionesComponent";
import { FooterComponent } from "../components/footerComponent";

class Registro extends React.Component {
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
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
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
                            <div className="login-button">
                                <a href="login">Iniciar sesión</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container signup">
                    <form id="form-signup" className="form-signup">
                        <div className="titulo">
                            <h1 className="titulo">Regístrate</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="nombre" className="form-label">Nombre de usuario</label>
                                    <input type="text" id="nombre" name="nombre" className="form-control"
                                        placeholder="Ingrese su nombre de usuario" required />
                                </div>
                                <div className="mb-3">
                                    <label for="rut" className="form-label">RUT</label>
                                    <input type="text" id="rut" name="rut" className="form-control"
                                        placeholder="Ingrese su RUT" required />
                                </div>
                                <div className="campo">
                                    <label for="regiones" className="form-label">Región</label>
                                    <RegionesComponent />
                                </div>
                                <div className="campo">
                                    <label for="comunas" className="form-label">Comuna</label>
                                    <select className='form-select' id="regiones" name="regiones">
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="email" className="form-label">Correo electrónico</label>
                                    <input type="email" id="email" name="email" className="form-control"
                                        placeholder="Ingrese su correo electrónico" required />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Contraseña</label>
                                    <input type="password" id="password" name="password" className="form-control"
                                        placeholder="Ingrese su contraseña" required />
                                </div>
                                <div className="mb-3">
                                    <label for="password2" className="form-label">Confirmación de contraseña</label>
                                    <input type="password" id="password2" name="password2" className="form-control"
                                        placeholder="Reingrese su contraseña" required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 form-check" style={{ paddingTop: '3%' }}>
                            <input type="checkbox" className="form-check-input" id="tyc" name="tyc" />
                            <label className="form-check-label" for="tyc" id="tyc-text" name="tyc">He leido y estoy de acuerdo con los términos y
                                condiciones de la web.</label>
                        </div>
                        <div className="mb-3 blue-button">
                            <button type="submit" className="btn btn-primary">Crear cuenta</button>
                        </div>
                    </form>
                </div>

                <div className='footerComponent'>
                    <FooterComponent />
                </div>
            </>
        )
    }
}

export default Registro;