import React from "react";
import { CarouselBibliotecaComponent } from "../components/carouselBibliotecaComponent";

class Biblioteca extends React.Component {
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
                                    <a className="nav-link active" aria-current="page" href="biblioteca">Biblioteca</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="paginaUsuario">Reportajes</a>
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
                <div className="content-wrapper">
                    <div className="container">
                        <div className="contenido-img" >
                            <CarouselBibliotecaComponent />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '3vh' }}></div>


                <div className="container-videos">
                    <div className="grupo">
                        <h1 className="title1"><i className="fa-brands fa-js-square"></i>Videos</h1>
                        <div className="contvideos">
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GOSyml_q_Mk?si=D54XMbHQhRCwYve3"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_GflwR-GtY?si=cKlinGUkdZBQXHMG"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/i5RVDQijW3E?si=9R3gxa9YWStwjen7"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/NTJkni5Z6tc?si=yRXrRQIBTaiDqhFQ"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/CiSQkHqyNmI?si=_dcULrju1J-3JGMw"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1iZ5yPOuQng?si=nemBcEy0FnZ7TTi8"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                        </div>

                    </div>
                    <div className="grupo2">
                        <h1 className="title1"><i className="fa-brands fa-python"></i>Documentales</h1>
                        <div className="contvideos">
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ckxz-Y_oSUY?si=sdEj2hXlUIeZeVmL"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/9bBULHel3mQ?si=cNmJmwXcDyTeOMhW"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/TVWyRzfhFDA?si=FeIYbVB9HpXvrr5j"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7hgSxghkMY?si=a6RQxr6ORPwS0N0r"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xxrvS09IMFM?si=H-TA47zV4PcJzk6x"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0NrUiw3i0PE?si=N2uwez8Xyt7oHP23"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/WI2o1c0uF9I?si=j2LIS34R1oLtu_bH"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-UXzVZWkKzs?si=43Eg8zomgzYGaS2A"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lL3b09oF5bQ?si=Pi8E8fnyY4fJlfGp"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div className="video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/UalBYOmYeNs?si=andLK7dyuF5RYZwd"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
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
                            <div className="col-md-9 col-sm-12 text-center">
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

export default Biblioteca;