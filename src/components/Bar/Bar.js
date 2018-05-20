import React, { Component } from 'react';

class Bar extends Component{

  render() {
    return (
      <div>
        {
          this.props.tags.map((element, index) => {
            return <button id={element.id} key={element.id} onClick={() => this.props.click(index)}>
              {element.tag},{element.status}
            </button>
          })
        }
      </div>
    )
  }
}
export default Bar;
