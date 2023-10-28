
document.addEventListener("DOMContentLoaded", function () {
    const regiones = ["Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Libertador General Bernardo O'Higgins",
                      "Maule", "Bio-bío", "La Araucanía", "Los Lagos", "Aysén", "Magallanes", "Metropolitana", 
                      "Los Ríos", "Arica y Parinacota", "Ñuble"];
    const selectRegion = document.getElementById("regiones");

    const opcionPredeterminada = document.createElement("option");
    opcionPredeterminada.value = "";
    opcionPredeterminada.text = "Seleccione una región";
    selectRegion.appendChild(opcionPredeterminada);

    regiones.forEach((region) => {
        const option = document.createElement("option");
        option.value = region;
        option.text = region;
        selectRegion.appendChild(option);
    });
});