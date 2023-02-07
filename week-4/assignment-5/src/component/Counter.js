import React, { useState } from 'react';

const Counter = (props) => {
  const handleClick = () => {
    props.setNum(() => [
      ...props.num.slice(0, props.index),
      props.num[props.index] + 1,
      ...props.num.slice(props.index + 1)
    ]);
  }

  return (
    <div className="counter">
      <button className="add-one" onClick={ handleClick } >+1</button>
      <div className="number">
        <p>{ props.num[props.index] }</p>
      </div>
    </div>
  );

}

export default Counter;