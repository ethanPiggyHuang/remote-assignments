import React from 'react';
import {createRoot} from 'react-dom/client';
import CounterBundle from './component/CounterBundle'

const root = document.getElementById('root');
const App = () => {
  return(
    <div>
      <CounterBundle />
    </div>
  );
}

createRoot(root).render(<App />);      //new code for React 18