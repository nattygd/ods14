import React, { useState } from "react";
import { RegionesComponent } from "../components/regionesComponent";
import { FooterComponent } from "../components/footerComponent";
import { useNavigate } from 'react-router-dom';

export default function Registro() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rut, setRut] = useState("");
    const [email, setEmail] = useState("");

    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     try {
    //         const res = await Axios.post("http://localhost:3001/registro", { username, password, rut, email });

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
            rut: rut,
            email: email
        };

        fetch('http://localhost:3001/registro', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    console.log(result.message);
                    navigate('/login');
                }
                else {
                    console.error("Error al crear usuario");
                }
            })
            .catch(error => {
                console.log(error)
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
                <form id="form-signup" className="form-signup" onSubmit={handleSubmit}>
                    <div className="titulo">
                        <h1 className="titulo">Regístrate</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre de usuario</label>
                                <input type="text" id="nombre" name="nombre" className="form-control"
                                    placeholder="Ingrese su nombre de usuario"
                                    onChange={(e) => { setUsername(e.target.value) }} required />
                            </div>
                            <div className="mb-3">
                                <label for="rut" className="form-label">RUT</label>
                                <input type="text" id="rut" name="rut" className="form-control"
                                    placeholder="Ingrese su RUT"
                                    onChange={(e) => { setRut(e.target.value) }} required />
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
                                    onChange={(e) => { setEmail(e.target.value) }} placeholder="Ingrese su correo electrónico" required />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Contraseña</label>
                                <input type="password" id="password" name="password" className="form-control"
                                    onChange={(e) => { setPassword(e.target.value) }} placeholder="Ingrese su contraseña" required />
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
                        <button className="btn btn-primary">Crear cuenta </button>
                    </div>
                </form>
            </div>

            <div className='footerComponent'>
                <FooterComponent />
            </div>
        </>
    )
}