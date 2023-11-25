import React, { useState } from "react";
import Axios from "axios";

import Swal from 'sweetalert2';

function ListaReportajes() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [link, setLink] = useState("");
    const [idReportaje, setIdReportaje] = useState();

    const [editar, setEditar] = useState(false);

    const [reportajes, setReportajes] = useState([]);

    const agregarReportaje = () => {
        Axios.post("http://localhost:3001/create", {
            titulo: titulo,
            autor: autor,
            descripcion: descripcion,
            link: link
        }).then(() => {
            obtenerReportajes();
            limpiarDatos();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Reportaje registrado exitosamente",
                html: "<i>El reportaje <strong>" + titulo + "</strong> fue registrado</i>",
                showConfirmButton: false,
                timer: 2300
            });
        }).catch(error => {
            console.error("Axios error:", error);
        })
    }

    const actualizar = () => {
        Axios.put("http://localhost:3001/actualizar", {
            idReportaje: idReportaje,
            titulo: titulo,
            autor: autor,
            descripcion: descripcion,
            link: link
        }).then(() => {
            obtenerReportajes();
            limpiarDatos();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Actualizado exitosamente",
                html: "<i>El reportaje <strong>" + titulo + "</strong> fue actualizado</i>",
                showConfirmButton: false,
                timer: 2300
            });
        });
    }

    const limpiarDatos = () => {
        setTitulo("");
        setAutor("");
        setDescripcion("");
        setLink("");

        setEditar(false);
    }

    const editarReportajes = (val) => {
        setEditar(true);

        setTitulo(val.titulo);
        setAutor(val.autor);
        setDescripcion(val.descripcion);
        setLink(val.link);

        setIdReportaje(val.idReportaje);

    }

    const eliminar = (idReportaje) => {
        Swal.fire({
            title: "Estás segur@?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "¡Sí, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://localhost:3001/eliminar/${idReportaje}`
                ).then(() => {
                    obtenerReportajes();
                    limpiarDatos();

                });

                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El reportaje fue eliminado",
                    icon: "success"
                });
            }
        });
    }

    const obtenerReportajes = () => {
        Axios.get("http://localhost:3001/reportajes",).then((response) => {
            setReportajes(response.data);
        });
    }

    obtenerReportajes();

    return (
        <div className="formulario">
            <div className="card text-center">
                <div className="card-header">Gestión de reportajes</div>
                <div className="card-body">
                    <form>
                        <div className="form-group row">
                            <div className="form-group col-md-6">
                                <label>Titulo</label>
                                <input onChange={(event) => { setTitulo(event.target.value); }} value={titulo} type="text" className="form-control" placeholder="Ingrese un titulo"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Autor</label>
                                <input onChange={(event) => { setAutor(event.target.value); }} value={autor} type="text" className="form-control" placeholder="Ingrese el nombre del autor"></input>
                            </div>

                            <label>Descripción</label>
                            <textarea onChange={(event) => { setDescripcion(event.target.value); }} value={descripcion} className="form-control" rows="2"></textarea>

                            <label>Link</label>
                            <input onChange={(event) => { setLink(event.target.value); }} value={link} type="text" className="form-control"></input>
                        </div>

                    </form>
                </div>
                <div className="card-footer text-muted">
                    {
                        editar ?
                            <div>
                                <button type="button" className="btn btn-success m-2" onClick={actualizar}>Actualizar</button>
                                <button type="button" className="btn btn-danger m-2" onClick={limpiarDatos}>Cancelar</button>
                            </div>
                            :
                            <button type="button" className="btn btn-success" onClick={agregarReportaje}>Registrar</button>

                    }
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col" style={{ maxWidth: "200px" }}>Link</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportajes.map((val, key) => {
                            return <tr key={val.idReportaje}>
                                <th scope="row">{val.idReportaje}</th>
                                <td>{val.titulo}</td>
                                <td>{val.autor}</td>
                                <td>{val.descripcion}</td>
                                <td style={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}><a href={val.link} target="_blank" rel="noopener noreferrer">
                                    {val.link}
                                </a></td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" onClick={() => { editarReportajes(val) }} className="btn btn-warning">Editar</button>
                                        <button type="button" onClick={() => { eliminar(val.idReportaje) }} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListaReportajes;