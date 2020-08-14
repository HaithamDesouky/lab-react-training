import React from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  console.log(limit);
  let num = parseInt(limit);
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }

  console.log(array);

  return (
    <div className="numsRow">
      {array.map((number, index) => (
        <div
          key={number}
          className="eachNum"
          style={{ backgroundColor: index % 2 === 0 ? 'white' : 'red' }}
        >
          {' '}
          {<span>{number}</span>}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
