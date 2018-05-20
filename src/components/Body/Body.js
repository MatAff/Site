import React from 'react';
import Blog from './Blog/Blog.js';
import Projects from './Projects/Projects.js';
import Sheets from './Sheets/Sheets.js';

import '../App.css';

const body = (props) => {
  return (
    <div className="App-body">
      {props.tags[0].status === "hide" ? null : <Blog tag={props.tags[0]} /> }
      {props.tags[1].status === "hide" ? null : <Projects tag={props.tags[1]} /> }
      {props.tags[2].status === "hide" ? null : <Sheets tag={props.tags[2]} /> }      
    </div>
)}

export default body;
