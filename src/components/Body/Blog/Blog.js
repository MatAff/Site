import React from 'react';
import Post0001 from './Post/Post0001.js';

const blog = (props) => {
  return (
    <div>
      <h3>Blog</h3>
      <Post0001 status={props.tag.status}/>
    </div> 
  )
}

export default blog;
