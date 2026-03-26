import React, { useState, useEffect } from "react";
import "./RegistrarOperadores.css";
import { use } from "react";

function RegistrarOperadores({
  OperadorEditado,
  limpiarSeleccion,
  onActualizarOperador,
}) {
  const [name, setName] = React.useState("");
  const [apellidoP, setApellidoP] = React.useState("");
  const [apellidoM, setApellidoM] = React.useState("");
  const [turno, setTurno] = React.useState("");
  const [unidad, setUnidad] = React.useState("");

  useEffect(() => {
    if (OperadorEditado) {
      setName(OperadorEditado.name);
      setApellidoP(OperadorEditado.apellidoP);
      setApellidoM(OperadorEditado.apellidoM);
      setTurno(OperadorEditado.turno);
      setUnidad(OperadorEditado.unidad);
    } else {
      resetForm();
    }
  }, [OperadorEditado]);
  const resetForm = () => {
    setName("");
    setApellidoP("");
    setApellidoM("");
    setTurno("");
    setUnidad("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoOperador = { nombre: name, apellidoP, apellidoM, turno, noPlaca: unidad };

    try {
      const respuesta = await fetch('http://localhost:3001/api/operadores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoOperador)
      });
      
      const data = await respuesta.json();
      
      if (respuesta.ok && data.exito) {
        alert("Operador registrado exitosamente");
        resetForm();
        if (onActualizarOperador) onActualizarOperador();
      } else {
        alert(data.error || "Error al registrar operador");
      }
    } catch (error) {
      console.error("Error al registrar operador:", error);
      alert("Error de conexión con el servidor");
    }
  };
  return (
    <div>
      <h2>Registrar Nuevo Operador</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Apellido Paterno"
          value={apellidoP}
          onChange={(e) => setApellidoP(e.target.value)}
        />

        <input
          type="text"
          placeholder="Apellido Materno"
          value={apellidoM}
          onChange={(e) => setApellidoM(e.target.value)}
        />

        <input
          type="text"
          placeholder="Turno"
          value={turno}
          onChange={(e) => setTurno(e.target.value)}
        />

        <input
          type="text"
          placeholder="Unidad"
          value={unidad}
          onChange={(e) => setUnidad(e.target.value)}
        />

        <button type="submit">Guardar Operador</button>
      </form>
    </div>
  );
}

export default RegistrarOperadores;
