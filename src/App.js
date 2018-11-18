import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


// Routes
import Routes from './components/Routes/Routes';


const App = () => (
    <Router>
      <Routes />
    </Router>
  );

export default App;