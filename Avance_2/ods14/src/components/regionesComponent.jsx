import React from 'react';

export const RegionesComponent = () => {
    const regiones = ["Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Libertador General Bernardo O'Higgins",
        "Maule", "Bio-bío", "La Araucanía", "Los Lagos", "Aysén", "Magallanes", "Metropolitana",
        "Los Ríos", "Arica y Parinacota", "Ñuble"];

    return (
    <select className='form-select' id="regiones" name="regiones">
      <option value="">Seleccione una región</option>
      {regiones.map((region, index) => (
        <option key={index} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}