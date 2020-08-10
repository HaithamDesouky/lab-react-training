import React from 'react';

import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let num = '---- ---- ---- ' + number.substring(12, 16);

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color, borderRadius: '5%' }}
    >
      <div className="type">{type} </div>
      <div className="number"> {num}</div>
      <div className="details">
        Expires {expirationMonth}/{expirationYear} {bank}
      </div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;
