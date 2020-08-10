import React from 'react';

// import './Greetings.css';

const RandomNum = ({ max, min }) => {
  let num = min + Math.floor(Math.random() * max);
  return (
    <div className="individual">
      <p>
        {' '}
        Random value between {min} and {max} = {num}{' '}
      </p>
    </div>
  );
};

export default RandomNum;
