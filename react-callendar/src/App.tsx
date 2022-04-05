import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { EMessageSeverity, Message } from './components/Message';
import { Callendar } from './components/Callendar';

function App() {
  return (
    <div className="container-fluid">
      <React.Fragment>
        <Callendar />
      </React.Fragment>
    </div>
  );
}

export default App;
