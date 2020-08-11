import React from 'react';

import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleButtonClickLeft = () => {
    this.setState({
      index: this.state.index === 0 ? 3 : this.state.index - 1,
    });
    console.log(this.state.index);
  };

  handleButtonClickRight = () => {
    this.setState({
      index: this.state.index === 3 ? 0 : this.state.index + 1,
    });
    console.log(this.state.index);
  };

  render() {
    return (
      <div className="carousel">
        <button onClick={this.handleButtonClickLeft}>LEFT</button>
        <img
          src={this.props.imgs[this.state.index]}
          alt=""
          id="clickable"
          onClick={this.handleButtonClick}
        />
        <button onClick={this.handleButtonClickRight}>RIGHT</button>
        {/* <button
          style={{ backgroundColor: this.state.colors[this.state.value] }}
          onClick={this.handleButtonClick}
        >
          {this.state.value} likes
        </button> */}
      </div>
    );
  }
}

export default Carousel;
