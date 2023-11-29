import React from "react";

export const FooterComponent = () => {
    return (
        <div>
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
                            <a className="menu" href="#">
                                Inicio
                            </a>
                            <a className="menu" href="#important">
                                Importancia
                            </a>
                            <a className="menu" href="#objectives">
                                Metas
                            </a>
                            <a className="menu" href="#groups">
                                Agrupaciones
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <p>Copyright ODS14</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
