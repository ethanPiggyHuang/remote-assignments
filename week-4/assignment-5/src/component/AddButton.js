import React from 'react';

const AddButton = (props) => {
  const handleCounterNum = () => {
      props.setNumber(prev => prev+1);
  }

  return (
    <button className="add-counter" onClick={ handleCounterNum }>Add a Counter</button>
  );
}

export default AddButton;