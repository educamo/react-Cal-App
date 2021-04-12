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