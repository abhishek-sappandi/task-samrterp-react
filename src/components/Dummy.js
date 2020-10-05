import React, { Component } from 'react'
import { connect} from 'react-redux'

const List = (props) => (
  <ul>
    {props.post.map(item => {
      const ref = React.createRef();
 
      const handleClick = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
 
      return (
        <li
          key={item.id}
          ref={ref}
          style={{ height: '150px', width : '10px', border: '1px solid black' }}
        >
          <p>item</p>
          <button type="button" onClick={handleClick}>
            Scroll Into View
          </button>
        </li>
      );
    })}
  </ul>
);
const mapStateToPrps = (state) =>{
  return {
      post : [1,2,2,3,3,3]
  }
}
export default connect(mapStateToPrps)(List);