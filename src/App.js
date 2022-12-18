import logo from './logo.svg';
import './App.css';
import Conexion  from './components/conexion.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Conexion/>
      </header>
    </div>
  );
}

export default App;
