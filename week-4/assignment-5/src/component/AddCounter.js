import React from 'react';

const AddCounter = (props) => {
  const handleCounterNum = () => {
      props.setNum([...props.num,0]);
  }

  return (
    <button className="add-counter" onClick={ handleCounterNum }>Add a Counter</button>
  );
}

export default AddCounter;