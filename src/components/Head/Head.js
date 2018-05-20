import React from 'react';
import logo from '../../assets/logo.png';

const head = (props) => {
  return (
    <div>
      <header className="Head">
        <img onClick={props.click} src={logo} className="App-logo" alt="logo" />
        <h1 className="Title">Data-Analysis and Coding</h1>
      </header>
    </div>
)}

export default head;
