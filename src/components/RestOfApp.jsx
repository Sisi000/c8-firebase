import React, { useContext } from 'react' //rcfe
import logo from '../logo.svg';
import '../App.css';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { render } from '@testing-library/react';



function RestOfApp() {
    const fbContext = useContext(FirebaseContext);
    const app = fbContext.app;
  
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
     <pre>
         Firebase app info:
         <br />
         {JSON.stringify(app, null, 2)}
         <br />
     </pre>
    </header>
  </div>
  )
}

export default RestOfApp