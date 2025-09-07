<<<<<<< HEAD
// importacion
import React from 'react';

// importar componentes
import Result from './components/Result';

//importar css
import './App.css';


// generacion de la funcion (arrow funtion)
const App = () => {
    console.log('Renderizacion de App');
    // lo que ejecuta la funcion
    return (
    <main className='react-calculator'>
        <Result value={"0"} />;
    </main>
    );
};


// exportacion
export default App;
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 4564268e6c764a38f585ae31965484f5f3caf288
