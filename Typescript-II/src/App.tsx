import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  return (
    <div className="App">
     <h1>Product Management Application</h1>
     <br/>
     <hr/>
     <br/>
     <Form/>
     <br/>
     <hr/>
     <br/>
     <Display/>
    </div>
  );
}

export default App;
