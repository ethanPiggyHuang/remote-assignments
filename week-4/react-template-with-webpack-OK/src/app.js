import React from 'react';
import {createRoot} from 'react-dom/client';
import Component from './component/Component'

const root = document.getElementById('root');
const App = () => {
  return(
    <div>
      <h1>React App</h1>
      <Component />
    </div>
  );
}

// ReactDOM.render(<App />, root);     //old code for React 17
createRoot(root).render(<App />);      //new code for React 18