import React from 'react';

import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  console.log(name, rating, img, car);
  let num = Math.round(parseInt(rating));
  let stars = '☆☆☆☆☆';
  let array = stars.split('');
  for (let i = 0; i < num; i++) {
    array[i] = '★';
  }
  let finished = array.join('');
  console.log('hello');

  return (
    <div className="license">
      <img src={img} alt="" />

      <div className="details">
        <strong>{name}</strong>
        <p>{finished}</p>
        <p>
          {car.model} {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
