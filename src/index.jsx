import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

//importar el componente
import App from './App';


// utilizar el componente
ReactDOM.render(<App />,
    document.getElementById('root'));
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 4564268e6c764a38f585ae31965484f5f3caf288
