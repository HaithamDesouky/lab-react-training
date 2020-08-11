import React from 'react';

import './LikeButton.css';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    };
  }
  handleButtonClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div className="button-div">
        <button
          style={{ backgroundColor: this.state.colors[this.state.value] }}
          onClick={this.handleButtonClick}
        >
          {this.state.value} likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
