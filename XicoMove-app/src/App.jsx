import { useState } from 'react'
import Encabezado from './encabezado';
import './App.css'
import Rutas from './Rutas';
import Contacto from './Contacto';
import Mapa from './mapa';
import Centro_Morelos from './recursos-rutas/Centro-Morelos';
import Centro_Tabacal from './recursos-rutas/Centro-Tabacal';
import Utxj_Tabacal from './recursos-rutas/Utxj-Tabacal';
import Baritas_Centro from './recursos-rutas/Baritas-Centro';
import Centro_Utxj from './recursos-rutas/Centro_Utxj';
import Login from './Login';
import Unidades from './unidades';
import Operadores from './operadores';

const PlaceholderVista = ({ titulo }) => (
  <div style={{ color: "white", padding: "50px", textAlign: "center" }}>
    <h1>{titulo}</h1>
    <p>Pantalla en construcción</p>
  </div>
);

function App() {
  const [vista, setVista] = useState('Inicio');
  const [UsuarioActual, setUsuarioActual] = useState(null);

  return (
    <div className='App-container'>
      <Encabezado cambiarVista={setVista} UsuarioActual={UsuarioActual} setUsuarioActual={setUsuarioActual} />

      <main className='Contenido'>
        {vista === 'Inicio' && <h1>Bienvenido a XicoMove</h1>}
        {vista === 'Login' && <Login onLogin={(user) => { setUsuarioActual(user); setVista('Inicio'); }} />}
        {vista === 'Rutas' && (<Rutas cambiarVista={setVista} />)}
        {vista === 'Contacto' && (<Contacto />)}
        {vista === 'AcercaDe' && <h1>Acerca de XicoMove</h1>}
        {vista === 'Centro-Tabacal' && <Centro_Tabacal />}
        {vista === 'Centro-Morelos' && <Centro_Morelos />}
        {vista === 'UTXJ-Tabacal' && <Utxj_Tabacal />}
        {vista === 'Baritas-Centro' && <Baritas_Centro />}
        {vista === 'Centro-Utxj' && <Centro_Utxj />}
        
        {/* Vistas de Administrador */}
        {vista === 'Añadir Unidades' && <Unidades/> }
        {vista === 'Añadir Operadores' && <Operadores/>}
        {vista === 'Historial de Reportes' && <PlaceholderVista titulo="Historial de Reportes de Pánico" />}

        <Mapa lat={20.2390} lng={-97.9982} nombre="XicoMove" />
      </main>

      <footer className="main-footer">
        <p>&copy; 2026 Carballo1305. XicoMove.</p>
      </footer>
    </div>
  );
}
export default App;