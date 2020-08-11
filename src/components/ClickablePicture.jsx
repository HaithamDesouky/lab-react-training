import React from 'react';

import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  handleButtonClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="button-div">
        <img
          src={!this.state.clicked ? this.props.img : this.props.imgClicked}
          alt=""
          id="clickable"
          onClick={this.handleButtonClick}
        />
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

export default ClickablePicture;
