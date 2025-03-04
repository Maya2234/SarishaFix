import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './Context/Navigation';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<NavigationProvider>
     <App/>
    </NavigationProvider>
   );