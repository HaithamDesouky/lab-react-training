import React from 'react';

import './Dice.css';

const randomNum = () => {
  return Math.floor(1 + Math.random() * 6);
};

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      clicked: false,
    };
  }
  handleButtonClick = () => {
    this.setState({
      clicked: false,
    });
    setTimeout(() => {
      this.setState({
        value: randomNum(),
        clicked: true,
      });
    }, 1000);
  };

  render() {
    return (
      <div className="dice-div">
        <img
          src={
            this.state.clicked === false
              ? './img/dice-empty.png'
              : `./img/dice${this.state.value}.png`
          }
          alt=""
          id="clickable"
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default Dice;
