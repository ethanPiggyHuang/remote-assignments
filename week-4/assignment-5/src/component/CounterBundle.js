import React, { useState } from 'react';
import AllPlus from './AllPlus';
import Counter from './Counter';
import AddCounter from './AddCounter';

const CounterBundle = () => {
  const [ num, setNum ] = useState([0,0,0]);

  return (
    <div>
      <AllPlus 
        num = { num }
        setNum = { setNum } 
      />
      {
        num.map((aCounter, index) => 
          <Counter 
            key = { index } 
            index = { index } 
            num = { num } 
            setNum = { setNum } 
          />
        )
      }
      <AddCounter 
        num = { num }
        setNum = { setNum } 
      />
    </div>
  );
}

export default CounterBundle;