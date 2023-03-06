import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './ReduxStore/store';
import App from './Pages/App';
import PokemonApp from './Pages/PokemonApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App /> /**/}
      {<PokemonApp /> /**/}
    </Provider>
  </React.StrictMode>
);
