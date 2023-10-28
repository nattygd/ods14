import React from "react";
import { CarouselGroupsComponent } from "../components/carouselGroupsComponent";

class Inicio extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Bootstrap" width="50" height="50" /> ODS14
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Objetivos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#important">Importancia</a></li>
                                        <li><a className="dropdown-item" href="#objectives">Metas</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#groups">Agrupaciones</a>
                                </li>
                            </ul>
                            <div className="login-button m-2">
                                <a href="login">Iniciar sesion</a>
                            </div>
                            <div className="signin-button">
                                <a href="registro">Registrarse</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="content-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 custom-heigth">
                                <h1>ODS 14</h1>
                                <h1>Vida Submarina</h1>
                                <span>El Objetivo de Desarrollo Sostenible 14 trata sobre alianzas para los objetivos y es uno de
                                    los 17 Objetivos de Desarrollo Sostenible establecidos por las Naciones Unidas en 2015. El ODS
                                    14 es: "Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos
                                    para el desarrollo sostenible".</span>
                                <br />
                                <div className="m-2">
                                    <a className="btn btn-primary" href="login" role="button">Conoce más</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="images/ballena.png" className="img-ballena" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div id="important" className="row">
                                    <h1 className="text-center">Importancia</h1>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="flip-card shadow">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front vertical-center">
                                                    <h1 className="numero-card">75%</h1>
                                                </div>
                                                <div className="flip-card-back vertical-center">
                                                    <p>El océano cubre tres cuartas partes de la superficie de la Tierra y
                                                        representa el 99% del espacio vital del planeta en volumen</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="flip-card shadow">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front vertical-center">
                                                    <h1 className="texto-card">200 mil</h1>
                                                </div>
                                                <div className="flip-card-back vertical-center">
                                                    <p>El océano contiene casi 200.000 especies identificadas, pero las cifras
                                                        reales pueden ser millones.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="flip-card shadow">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front vertical-center">
                                                    <h1 className="numero-card">40%</h1>
                                                </div>
                                                <div className="flip-card-back vertical-center">
                                                    <p>Hasta un 40% del océano se ve muy afectado por la contaminación, las
                                                        pesquerías agotadas, la pérdida de hábitats costeros y otras actividades
                                                        humanas.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="flip-card shadow">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front vertical-center">
                                                    <h1 className="numero-card">30%</h1>
                                                </div>
                                                <div className="flip-card-back vertical-center">
                                                    <p>El océano absorbe alrededor del 30% del dióxido de carbono producido por los
                                                        humanos, amortiguando los impactos del calentamiento global.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="flip-card shadow">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front vertical-center">
                                                    <h1 className="texto-card">3 mil millones</h1>
                                                </div>
                                                <div className="flip-card-back vertical-center">
                                                    <p>Más de 3.000 millones de personas dependen de la biodiversidad marina y
                                                        costera para su sustento.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="flip-card shadow">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front vertical-center">
                                                    <h1 className="texto-card">3 billones USD</h1>
                                                </div>
                                                <div className="flip-card-back vertical-center">
                                                    <p>A nivel global, el valor de mercado de los recursos e industrias marinas y
                                                        costeras se estima en USD 3 billones por año, alrededor del 5% del PIB
                                                        mundial.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div id="objectives" className="row">
                                    <h1 className="text-center">Metas</h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="accordion" id="accordionExample1">
                                            <div className="accordion-item mt-3 ">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button collapsed n1" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                        Prevenir y reducir la contaminación marina
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse n1"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        De aquí a 2025, prevenir y reducir significativamente la contaminación
                                                        marina de todo tipo, en particular la producida por actividades realizadas
                                                        en tierra, incluidos los detritos marinos y la polución por nutrientes.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed n2" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        Gestionar y proteger los ecosistemas marinos
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        De aquí a 2020, gestionar y proteger sosteniblemente los ecosistemas
                                                        marinos y costeros para evitar efectos adversos importantes, incluso
                                                        fortaleciendo su resiliencia y adoptar y medidas para restaurarlos
                                                        a fin de restablecer la salud y la productividad de los
                                                        océanos.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed n3" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        Minimizar y abordar los efectos de la acidificación
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        Minimizar y abordar los efectos de la acidificación de los océanos, incluso
                                                        mediante una mayor cooperación científica a todos los niveles.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading4">
                                                    <button className="accordion-button collapsed n4" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                                        aria-controls="collapse4">
                                                        Reglamentar la explotación pesquera
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4"
                                                    data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        De aquí a 2020, reglamentar eficazmente la explotación pesquera y poner fin
                                                        a la pesca excesiva, la pesca ilegal, no declarada y no reglamentada y las
                                                        prácticas pesqueras destructivas y aplicar planes de gestión con fundamento
                                                        científico a fin de restablecer las poblaciones de peces en el plazo más
                                                        breve posible, al menos alcanzando niveles que puedan producir el máximo
                                                        rendimiento sostenible de acuerdo con sus características biológicas.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading5">
                                                    <button className="accordion-button collapsed n5" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false"
                                                        aria-controls="collapse5">
                                                        Conservar al menos el 10% de las zonas costeras y marinas
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5"
                                                    data-bs-parent="#accordionExample1">
                                                    <div className="accordion-body">
                                                        De aquí a 2020, conservar al menos el 10 % de las zonas costeras y marinas,
                                                        de conformidad con las leyes nacionales y el derecho internacional y sobre
                                                        la base de la mejor información científica disponible.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading6">
                                                    <button className="accordion-button collapsed n6" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false"
                                                        aria-controls="collapse6">
                                                        Prohibir ciertas formas de subconvenciones a la pesca
                                                    </button>
                                                </h2>
                                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        De aquí a 2020, prohibir ciertas formas de subvenciones a la pesca que
                                                        contribuyen a la sobrecapacidad y la pesca excesiva, eliminar las
                                                        subvenciones que contribuyen a la pesca ilegal, no declarada y no
                                                        reglamentada y abstenerse de introducir nuevas subvenciones de esa índole,
                                                        reconociendo que la negociación sobre las subvenciones a la pesca en el
                                                        marco de la Organización Mundial del Comercio debe incluir un trato especial
                                                        y diferenciado, apropiado y efectivo para los países en desarrollo y los
                                                        países menos adelantados.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading7">
                                                    <button className="accordion-button collapsed n7" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false"
                                                        aria-controls="collapse7">
                                                        Aumentar los beneficios económicos
                                                    </button>
                                                </h2>
                                                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        De aquí a 2030, aumentar los beneficios económicos que los pequeños Estados
                                                        insulares en desarrollo y los países menos adelantados obtienen del uso
                                                        sostenible de los recursos marinos, en particular mediante la gestión
                                                        sostenible de la pesca, la acuicultura y el turismo.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading8">
                                                    <button className="accordion-button collapsed n8" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false"
                                                        aria-controls="collapse8">
                                                        Aumentar los conocimientos científicos
                                                    </button>
                                                </h2>
                                                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Aumentar los conocimientos científicos, desarrollar la capacidad de
                                                        investigación y transferir tecnología marina, teniendo en cuenta los
                                                        Criterios y Directrices para la Transferencia de Tecnología Marina de la
                                                        Comisión Oceanográfica Intergubernamental, a fin de mejorar la salud de los
                                                        océanos y potenciar la contribución de la biodiversidad marina al desarrollo
                                                        de los países en desarrollo, en particular los pequeños Estados insulares en
                                                        desarrollo y los países menos adelantados.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading9">
                                                    <button className="accordion-button collapsed n9" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false"
                                                        aria-controls="collapse9">
                                                        Facilitar el acceso de los pescadores artesanales
                                                    </button>
                                                </h2>
                                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Facilitar el acceso de los pescadores artesanales a los recursos marinos y
                                                        los mercados.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mt-3">
                                                <h2 className="accordion-header" id="heading10">
                                                    <button className="accordion-button collapsed n10" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false"
                                                        aria-controls="collapse10">
                                                        Mejorar la conservación y el uso sostenible de los océanos y sus
                                                        recursos
                                                    </button>
                                                </h2>
                                                <div id="collapse10" className="accordion-collapse collapse" aria-labelledby="heading10"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Mejorar la conservación y el uso sostenible de los océanos y sus recursos
                                                        aplicando el derecho internacional reflejado en la Convención de las
                                                        Naciones Unidas sobre el Derecho del Mar, que constituye el marco jurídico
                                                        para la conservación y la utilización sostenible de los océanos y sus
                                                        recursos, como se recuerda en el párrafo 158 del documento “El futuro que
                                                        queremos”.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CarouselGroupsComponent />
                        <div style={{ marginTop: '3vh' }}></div>

                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <h1 className="text-center">Comentarios</h1>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                                        <div className="card py-3 px-4">
                                            <div className="w-50 mx-auto">
                                                <div className="d-flex justify-content-center mt-3 imagen-cuadrada">
                                                    <img src="https://i.pinimg.com/1200x/f3/d6/4c/f3d64c3f0531492e2736677201de4523.jpg"
                                                        alt="Icono" className="card-img-top rounded-circle icon-style centrar-imagen" />
                                                </div>
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title font-weight-bold ">Pepito29</h5>
                                                <p className="card-text">*Comentario a favor*</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                                        <div className="card py-3 px-4">
                                            <div className="w-50 mx-auto">
                                                <div className="d-flex justify-content-center mt-3 imagen-cuadrada">
                                                    <img src="https://i.pinimg.com/474x/98/43/c4/9843c460ff72ee89d791bffe667e451c.jpg"
                                                        alt="Icono" className="card-img-top rounded-circle icon-style centrar-imagen" />
                                                </div>
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title font-weight-bold ">Juanito17</h5>
                                                <p className="card-text">*Comentario en contra*</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                                        <div className="card py-3 px-4">
                                            <div className="w-50 mx-auto">
                                                <div className="d-flex justify-content-center mt-3 imagen-cuadrada">
                                                    <img src="https://i.pinimg.com/1200x/7f/f6/2a/7ff62ac238d2be96e37456430de07f0f.jpg"
                                                        alt="Icono" className="card-img-top rounded-circle icon-style centrar-imagen" />
                                                </div>
                                            </div>
                                            <div className="card-body text-center">
                                                <h5 className="card-title font-weight-bold">Belen24</h5>
                                                <p className="card-text">*Pregunta acerca de un tópico*</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer-07">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-4 text-center">
                                <h2 class="footer-heading"><a href="#" class="logo"><img src="images/logo.png"></img>ODS14</a></h2>
                            </div>
                            <div class="col-md-8 text-center">
                                <p class="menu">
                                    <a href="#">Inicio</a>
                                    <a href="#important">Importancia</a>
                                    <a href="#objectives">Metas</a>
                                    <a href="#groups">Agrupaciones</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <p>Copyright ODS14</p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Inicio;