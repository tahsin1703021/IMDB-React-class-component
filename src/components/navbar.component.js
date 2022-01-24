import React, { Component } from "react";
import imdb from '../imdb.jpg';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{padding:'10px'}}>
          <a className="navbar-brand" href="#" style={{color:'white'}}>
            <img src={imdb} style={{height:'40px',width:'auto',borderRadius:'5px'}}/>
          </a>
        </nav>
      </>
    );
  }
}

export default Navbar;
