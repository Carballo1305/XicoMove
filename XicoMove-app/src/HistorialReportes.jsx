import React from 'react';
import './HistorialReportes.css';

function HistorialReportes() {
    // Datos estáticos para mostrar el ejemplo
    const reportes = [
        {
            id: 1,
            fecha: '2026-03-25 14:30:45',
            localizacion: 'Centro-Utxj',
            curp: 'GOMR800110HDFRR01'
        },
        {
            id: 2,
            fecha: '2026-03-25 13:15:20',
            localizacion: 'Baritas-Centro',
            curp: 'MARA900202MDFRR02'
        },
        {
            id: 3,
            fecha: '2026-03-25 12:45:10',
            localizacion: 'UTXJ-Tabacal',
            curp: 'FIGR850315HDFRR03'
        },
        {
            id: 4,
            fecha: '2026-03-25 11:30:00',
            localizacion: 'Centro-Tabacal',
            curp: 'GOMR800110HDFRR01'
        },
    ];

    return (
        <div className="contenedor-historial">
            <h2>Historial de Reportes de Pánico</h2>
            <table className="tabla-reportes">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha y Hora</th>
                        <th>Localización (Ruta)</th>
                        <th>CURP del Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {reportes.map((reporte) => (
                        <tr key={reporte.id}>
                            <td>{reporte.id}</td>
                            <td>{reporte.fecha}</td>
                            <td>{reporte.localizacion}</td>
                            <td>{reporte.curp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HistorialReportes;
