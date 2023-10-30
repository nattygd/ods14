import React from "react";
import ReactDom from "react-dom";
import reportajes from "../json/listaReportajes.json"
import Reportajes from "../functions/Reportajes";
import Reportajes2 from "../functions/Reportajes";
import redireccionEnlace from "../functions/redireccionEnlace";

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

                    <h3 className="my-4">Forma 1</h3>
                    ReactDOM.render(<React.StrictMode><Reportajes /></React.StrictMode>, document.getElementById('app'));
                    <h3 className="my-4">Forma 2</h3>
                    ReactDOM.createRoot(document.getElementById('root')).render(<Reportajes />)

                    <h3 className="my-4">Forma 3</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">PDF</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                reportajes.map((reportajes, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i}</th>
                                        <td>{reportajes.Titulo}</td>
                                        <td>{reportajes.Autor}</td>
                                        <td>{reportajes.Descripcion}</td>
                                        <td><a href={reportajes.PDF}><img src="images/icono-pdf.png" width={50}></img></a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className="Enlaces">
                        <ul className="fila">
                            <div className="card-deck col-md-4" onClick={() => redireccionEnlace('https://obtienearchivo.bcn.cl/obtienearchivo?id=repositorio/10221/33542/1/ODS_14_Vida_submarina_Sept_2022.pdf')}
                                target="_blank" rel="noopener noreferrer"
                                style={{ cursor: "pointer" }}>
                                <div className="card h-100 w-90 p-4 mb-2 bg-primary bg-gradient text-white"
                                    style={{ margin: "1% 1% 1% 1%" }}>
                                    <img src="images/icono-pdf.png" className="card-img-top w-25" alt="pdf" />
                                    <div className="card-body text-white">
                                        <h5>Avances del ODS 14 (Vida Submarina) en Chile:</h5>
                                        <br />
                                        <span>Pablo Morales Estay informa sobre la importancia del cuidado maritimo y diversas
                                            problematicas como la sobrepesca, perdidas de ecosistemas y la sobreexplotación.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck col-md-4" onClick={() => redireccionEnlace('https://www.cepal.org/sites/default/files/static/files/ods14_c1900733_web.pdf')}
                                target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                <div className="card h-100 w-90 p-4 mb-2 bg-info bg-gradient text-dark" style={{ margin: "1% 1% 1% 1%" }}>
                                    <img src="images/icono-pdf.png" className="card-img-top w-25" alt="pdf" />
                                    <div className="card-body text-dark">
                                        <h5>ODS 14: Conservar y utilizar en forma sostenible los
                                            océanos, los mares y los recursos marinos para el
                                            desarrollo sostenible en América Latina y el Caribe:</h5>
                                        <br />
                                        <span>Información resumida de lo que consta el Objetivo de Desarrollo Sostenible 14.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck col-md-4" onClick={() => redireccionEnlace('https://mediambient.gva.es/documents/20550103/168407436/ODS+14+VIDA+SUBMARINA.pdf/d331ab7f-4b91-4d45-99e7-901120926cb9?t=1643793574824')}
                                target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                <div className="card h-100 w-90 p-4 mb-2 bg-success bg-gradient text-white"
                                    style={{ margin: "1% 1% 1% 1%" }}>
                                    <img src="images/icono-pdf.png" className="card-img-top w-25" alt="pdf" />
                                    <div className="card-body text-white">
                                        <h5>Campanya de Sensibilització Ambiental</h5>
                                        <h5>(Título en Catalán)</h5>
                                        <br />
                                        <span>Recomendaciones y consejos de buenas practicas que ayuden al objetivo propuesto, con
                                            tal
                                            de generar interés y atraer voluntarios que participen.</span>
                                    </div>
                                </div>
                            </div>
                        </ul>

                        <ul className="fila">
                            <div className="card-deck col-md-4" onClick={() => redireccionEnlace('https://www.2030spotlight.org/sites/default/files/download/Spotlight_Innenteil_2019_web_ods14.pdf')}
                                target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                <div className="card h-100 w-90 p-4 mb-2 bg-warning bg-gradient text-dark" style={{ margin: "1% 1% 1% 1%" }}>
                                    <img src="images/icono-pdf.png" className="card-img-top w-25" alt="pdf" />
                                    <div className="card-body text-dark">
                                        <h5>Gobernanza de los océanos para la sostenibilidad</h5>
                                        <br />
                                        <span>Maureen Penjueli relata lo muy importante que el oceano para el planeta.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck col-md-4" onClick={() => redireccionEnlace('https://www.ine.es/ss/Satellite?blobcol=urldata&blobheader=application%2Fpdf&blobheadername1=Content-Disposition&blobheadervalue1=attachment%3B+filename%3DCFR_ODS_14_PDF_V1.pdf&blobkey=urldata&blobtable=MungoBlobs&blobwhere=375%2F1020%2FCFR_ODS_14_PDF_V1.pdf&ssbinary=true')}
                                target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                <div className="card h-100 w-90 p-4 mb-2 bg-danger bg-gradient text-white" style={{ margin: "1% 1% 1% 1%" }}>
                                    <img src="images/icono-pdf.png" className="card-img-top w-25" alt="pdf" />
                                    <div className="card-body text-white">
                                        <h5>Conservar y utilizar en forma sostenible los <br /> océanos, los mares y los recursos
                                            marinos para el desarrollo sostenible</h5>
                                        <br />
                                        <span>Enfoque hacia la vida maritima, analizando la forma de <br /> vida de los seres que
                                            viven bajo el agua y los factores
                                            de su vivienda proponiendo soluciones.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck col-md-4" onClick={() => redireccionEnlace('https://catedraunescoeads.es/wp-content/uploads/2019/10/ODS14_WebCatedra.pdf')}
                                target="_blank" rel="noopener noreferrer" style={{ cursor: "pointer" }}>
                                <div className="card h-100 w-90 p-4 mb-2 bg-dark bg-gradient text-white" style={{ margin: "1% 1% 1% 1%" }}>
                                    <img src="images/icono-pdf.png" className="card-img-top w-25" alt="pdf" />
                                    <div className="card-body text-white">
                                        <h5>Objetivos de Desarrollo Sostenible (14/17)</h5>
                                        <br />
                                        <span>El Instituto Nacional de Estadística de España comparte datos <br />
                                            interesantes
                                            sobre los
                                            pros y contras que envuelve <br /> a la ODS14, incluyendo curiosidades.</span>
                                    </div>
                                </div>
                            </div>
                        </ul>
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