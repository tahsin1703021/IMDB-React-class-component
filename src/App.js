import React, { Component } from 'react';
import Movies from './components/movies.component';
import Navbar from './components/navbar.component';
import Student from './components/students.component';

class App extends React.Component {
  render() { 
    return (
      <div>
          <Navbar/>   
          <Movies/>
        
      </div>
    );
  }
}
 
export default App;

