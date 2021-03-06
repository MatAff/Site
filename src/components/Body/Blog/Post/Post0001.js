import React from 'react';

const post0001 = (props) => {
  return (
    <div>
    { props.status === "summary" ?
      <div>
        <h4>First Post!</h4>
          Here we go, my first ever blog post. Honestly, I never thought I'd be
          writing one of these, but after giving it some thought, I decided to
          give it a go, for a couple of reasons...
        </div> :
      <div>
        <h4>First Post!</h4>
          Here we go, my first ever blog post. Honestly, I never thought I'd be
          writing one of these, but after giving it some thought, I decided to
          give it a go, for a couple of reasons: Firstly, I figured writing blog
          posts would be a good way to document the projects I work on.
          Secondly, it will require me to be more systematic in how I approach
          the challenges and problems I run into. Finally I see it as a good way
          to share knowledge, which of course is a two way process, so I look
          forward to your comments and suggestions!
          <br/><br/>
          A word of warning, don't expect this blog to be about just one topic. It will most likely be a collection of posts about anything that sparks my interest! There will probably be a number of posts related to: data analysis, machine learning, programming, and robotics. If there's code involved, I will often point to my GitHub account. I will avoid rehashing information that is described well elsewhere, though I could post about articles/books I've read, if I think are mentioning!
          <br/><br/>
          Happy reading!
          <br/><br/>
          2017-08-04
      </div>
  }
  </div>
  )
}

export default post0001;
