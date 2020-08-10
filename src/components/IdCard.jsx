import React from 'react';

import './IdCard.css';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div className="individual">
      <img src={picture} alt="" />
      <div>
        <span>
          <strong>First name: </strong> {firstName}
        </span>
        <span>
          <strong>Last name: </strong>
          {lastName}
        </span>

        <span>
          <strong>Gender: </strong>
          {gender}
        </span>

        <span>
          <strong>Height: </strong>
          {height}
        </span>

        <span>
          <strong>Birth: </strong> {birth.toString()}
        </span>
      </div>
    </div>
  );
};

export default IdCard;
