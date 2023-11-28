import React from "react";
import Reportajes from "../components/Reportajes"
import redireccionEnlace from "../functions/redireccionEnlace.js";

class PaginaUsuario extends React.Component {
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
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
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
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="biblioteca">Biblioteca</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="paginaUsuario">Reportajes</a>
                                </li>
                            </ul>
                            <div className="input-group">
                                <input type="text" className="form-control" />
                                <button className="btn btn-primary">Buscar</button>
                            </div>
                            <div className="usuario">
                                <img src="images/icono-usuario.png" alt="Bootstrap" width="50" height="50" />Juan
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="cuerpo p-4">
                    <h1 className="my-4 text-center">Reportajes</h1>

                    <div>
                        <Reportajes />
                    </div>
                </div >

                <div className="comentar">
                    <div className="card-comment">
                        <div className="row">
                            <div className="col-2">
                                <img src="images/icono-usuario.png" width="60" className="rounded-circle mt-2" />
                            </div>
                            <div>
                                <div className="comment-box ml-2">
                                    <h4>Agregue un comentario</h4>
                                    <div className="comment-area">
                                        <textarea className="form-control" placeholder="¿Cuál es su opinión?" rows="4"></textarea>
                                    </div>

                                    <div className="comment-btns mt-2">
                                        <div className="row">
                                            <div className="col-6">
                                                <button type="button" className="btn btn-danger">Cancelar</button>
                                            </div>
                                            <div className="col-6">
                                                <button type="button" className="btn btn-success">Comentar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer-07">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-3 text-center">
                                <h2 className="footer-heading"><a href="/" className="logo"><img src="images/logo.png" />ODS14</a></h2>
                            </div>
                            <div className="col-md-9 text-center">
                                <p className="menu">
                                    <a href="/">Inicio</a>
                                    <a href="/#important">Importancia</a>
                                    <a href="/#objectives">Metas</a>
                                    <a href="/#groups">Agrupaciones</a>
                                    <a href="biblioteca">Biblioteca</a>
                                    <a href="paginaUsuario">Reportajes</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <p>Copyright ODS14</p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default PaginaUsuario;