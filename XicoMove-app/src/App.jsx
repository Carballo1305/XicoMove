import { useState } from 'react'
import Encabezado from './encabezado';
import './App.css'
import Rutas from './Rutas';

function App() {
 const [vista,setVista]= useState('Inicio');
 return(
  <div className='App-container'>
  <Encabezado cambiarVista={setVista} />
  <main className='Contenido'>
    {vista === 'Inicio' && <h1>Bienvenido a XicoMove</h1>}
    {vista === 'Rutas' && (<Rutas/>)}
    {vista === 'Contacto' && <h1>Contáctanos</h1>}
    {vista === 'AcercaDe' && <h1>Acerca de XicoMove</h1>}
  </main>
  </div>
 )
}
export default App;
