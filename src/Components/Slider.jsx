import React, { Component } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

class Slider extends Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    const { Films } = this.props;
    if (!Films) return;
    this.setState({ currentIndex: 0 });
  }

  handleRightArrowClick = () => {
    const { Films } = this.props;
    const { currentIndex } = this.state;
    if (currentIndex + 6 >= Films.length) return;
    this.setState({ currentIndex: currentIndex + 6 });
  };

  handleLeftArrowClick = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) return;
    this.setState({ currentIndex: currentIndex - 6 });
  };

  render() {
    const { Films } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="SliderContainer">
        <button className="SliderButton" onClick={this.handleLeftArrowClick}>
          <SlArrowLeft className="SliderArrow" />
        </button>
        {Films &&
          Films.slice(currentIndex, currentIndex + 6).map((item) => (
            <div className="item" key={item.imdbID}>
              <img src={item.Poster} alt="img" />
            </div>
          ))}
        <button className="SliderButton" onClick={this.handleRightArrowClick}>
          <SlArrowRight className="SliderArrow" />
        </button>
      </div>
    );
  }
}

export default Slider;
