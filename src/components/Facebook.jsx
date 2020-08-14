import React, { Component } from 'react';
import './Facebook.css';
import people from '../data/berlin.json';

const countries = people
  .map((person) => person.country)
  .filter(
    (country, index, originalArray) => originalArray.indexOf(country) === index
  );
console.log(countries);
class Facebook extends Component {
  constructor() {
    super();
    this.setState = {
      country: undefined,
    };
  }
  //click button, take entire array - filter by country and set state
  filterProfiles = (country) => {
    console.log(country);
    this.setState({
      country,
    });
  };

  render() {
    return (
      <div>
        {countries.map((f) => (
          <button
            key={f.country}
            onClick={() => this.filterProfiles(f.country)}
          >
            {f.country}
          </button>
        ))}
        {people.map((person) => {
          return (
            <div className="individual" key={person.img}>
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
                  {!person.isStudent ? 'teacher' : 'student'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Facebook;
