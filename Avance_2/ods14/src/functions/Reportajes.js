import React, { useEffect, useState } from "react"

function useReportajes() {
    const [reportajes, setReportajes] = useState([])

    useEffect(() => {
        fetch("/ods14/src/json/listaReportajes.json")
            .then(response => response.json())
            .then(datos => {
                setReportajes(datos)
            })
    }, [])

    return reportajes
}

export default function Reportajes() {
    const reportajes = useReportajes()

    return (
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
                {reportajes.map(item => (
                    <tr key={item.Id}>
                        <td>{item.Id}</td>
                        <td>{item.Titulo}</td>
                        <td>{item.Autor}</td>
                        <td>{item.Descripción}</td>
                        <td>{item.PDF}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}