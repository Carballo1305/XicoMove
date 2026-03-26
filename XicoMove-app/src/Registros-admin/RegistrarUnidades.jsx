import React, { useState, useEffect } from "react";
import "./RegistrarUnidades.css";

function RegistrarUnidades({
  UnidadEditada,
  limpiarSeleccion,
  onActualizarUnidad,
}) {
  const [noPlaca, setNoPlaca] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [idRuta, setIdRuta] = React.useState("");

  useEffect(() => {
    if (UnidadEditada) {
      setNoPlaca(UnidadEditada.noPlaca);
      setHorario(UnidadEditada.horario);
      setIdRuta(UnidadEditada.idRuta);
    } else {
      resetForm();
    }
  }, [UnidadEditada]);
  
  const resetForm = () => {
    setNoPlaca("");
    setHorario("");
    setIdRuta("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaUnidad = { noPlaca, horario, idRuta };

    try {
      const respuesta = await fetch('http://localhost:3001/api/unidades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaUnidad)
      });
      
      const data = await respuesta.json();
      
      if (respuesta.ok && data.exito) {
        alert("Unidad registrada exitosamente");
        resetForm();
        if (onActualizarUnidad) onActualizarUnidad();
      } else {
        alert(data.error || "Error al registrar unidad");
      }
    } catch (error) {
      console.error("Error al registrar unidad:", error);
      alert("Error de conexión con el servidor");
    }
  };
  
  return (
    <div>
      <h2>Registrar Nueva Unidad</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Número de Placa"
          value={noPlaca}
          onChange={(e) => setNoPlaca(e.target.value)}
        />

        <input
          type="text"
          placeholder="Horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />

        <input
          type="text"
          placeholder="ID Ruta"
          value={idRuta}
          onChange={(e) => setIdRuta(e.target.value)}
        />

        <button type="submit">Guardar Unidad</button>
      </form>
    </div>
  );
}

export default RegistrarUnidades;
