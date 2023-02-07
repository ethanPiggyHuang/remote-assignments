import React, { useState } from 'react';

const AllPlus = (props) => {
  const handleClick = () => {
    props.setNum(props.num.map(x => x + 1));
  }

  return (
    <button className="all-plus" onClick={ handleClick } >All + 1</button>
  );

}

export default AllPlus;