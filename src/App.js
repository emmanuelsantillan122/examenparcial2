import './App.css';
import estudiante from './assets/carro.png';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img src={estudiante} alt="estudiante" style={{ width: '200px', borderRadius: '8px' }} />
      <p style={{ marginTop: '20px' }}>
        Emmanuel Graciano Santillan - EXAMEN PARCIAL 2
      </p>
      <a 
        href="https://utdurango.edu.mx" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#61dafb', marginTop: '10px', textDecoration: 'underline' }}
      >
        UNIVERSIDAD TECNOLÓGICA DE DURANGO - CLICK PARA VISITAR EL SITIO
      </a>
    </div>
  );
}

export default App;
