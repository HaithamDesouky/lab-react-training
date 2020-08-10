import React from 'react';

// import './rating.css';

const Rating = ({ children }) => {
  let num = parseInt(children);
  let stars = '☆☆☆☆☆';
  let array = stars.split('');
  for (let i = 0; i < num; i++) {
    array[i] = '★';
  }
  let finished = array.join('');

  return <div className="stars"> {finished} </div>;
};

export default Rating;
