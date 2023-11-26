import React, { useState, useEffect } from "react";
import Axios from "axios";

function useReportajes() {
    const [reportajes, setReportajes] = useState([]);
    useEffect(() => {
        obtenerReportajes();
    }, []);

    const obtenerReportajes = () => {
        Axios.get("http://localhost:3001/reportajes").then((response) => {
            setReportajes(response.data);
        });
    }

    return (
        <div className="table-responsive">
            <table className="table table-hover table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Link</th>
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
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default useReportajes;