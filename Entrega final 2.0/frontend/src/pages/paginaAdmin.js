import React from "react";
import redireccionEnlace from "../functions/redireccionEnlace.js";
import ListaReportajes from "../components/listaReportajes.js";
import { FooterComponent } from "../components/footerComponent";

class PaginaAdmin extends React.Component {
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

                <div>
                    <ListaReportajes />
                </div>

                <footer className="footer-07">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 text-center col-12 logo-footer">
                                <h2 className="footer-heading logo-footer">
                                    <a href="#" className="logo">
                                        <img src="images/logo.png"></img>ODS14
                                    </a>
                                </h2>
                            </div>
                            <div className="col-md-8 text-center col-12 logo-footer">
                                <a className="menu" href="paginaUsuario">
                                    Reportajes
                                </a>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <p>Copyright ODS14</p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default PaginaAdmin;
