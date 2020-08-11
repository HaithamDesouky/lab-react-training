import React from 'react';
import './NumbersTable.css';

// const people = [
//   { name: 'Jose', number: '982908398132' },
//   { name: 'Santi', number: '32423432432432' },
//   { name: 'Aline', number: '12356' },
//   { name: 'Goncalo', number: '323213323' }
// ];

const NumbersTable = ({ limit }) => {
  // for(let i = 0; i < pro)
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
