/*import React, { useEffect, useState } from "react"

function useReportajes() {
    const [reportajes, setReportajes] = useState([])

    useEffect(() => {
        fetch("/json/listaReportajes.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(datos => {
                setReportajes(datos);
                console.log({ datos });
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    }, []);


    return reportajes
}

export default function Reportajes() {
    const reportajes = useReportajes()

    return (
        <table className="table table-hover" >
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

                {reportajes.map((reportajes, i) => (
                    <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{reportajes.Titulo}</td>
                        <td>{reportajes.Autor}</td>
                        <td>{reportajes.Descripcion}</td>
                        <td><a href={reportajes.PDF}><img src="images/icono-pdf.png" width={50}></img></a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}*/