import React, { useState, useEffect } from 'react';
import AddButton from './AddButton';
import Counter from './Counter';
import AllPlus from './AllPlus';

const CounterBundle = () => {
  const [ counterNum, setCounterNum ] = useState(3);
  const [ num, setNum ] = useState([0,0]);

  const counterArray = [];

  useEffect(() => {
    setNum([...num,0]);
  },[counterNum]);

  for (let i=0; i<counterNum; i++){
    counterArray.push(<Counter 
      key = { i } 
      index = { i }
      num = { num }
      setNum = { setNum }
      />)
  }

  return (
    <div>
      <AllPlus 
        num = { num }
        setNum = { setNum } 
      />
      { counterArray }
      <AddButton 
        number = { counterNum }
        setNumber = { setCounterNum }
      />
    </div>
  );
}

export default CounterBundle;