import React from 'react';
import './Facebook.css';
import people from '../data/berlin.json';

// const people = [
//   { name: 'Jose', number: '982908398132' },
//   { name: 'Santi', number: '32423432432432' },
//   { name: 'Aline', number: '12356' },
//   { name: 'Goncalo', number: '323213323' }
// ];

const Facebook = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div className="individual">
            <img src={person.img} alt="" />
            <div>
              <span>
                <strong>First name: </strong> {person.firstName}
              </span>
              <span>
                <strong>Last name: </strong>
                {person.lastName}
              </span>

              <span>
                <strong>Country: </strong>
                {person.country}
              </span>

              <span>
                <strong>Type: </strong>
                {person.type}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
