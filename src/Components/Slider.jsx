import React, { useState, useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const Slider = ({ Films }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (Films) {
      setCurrentIndex(0);
      setItems(Films.slice(0, 6).map((item) => ({ ...item, isShown: false })));
    }
  }, [Films]);

  const handleRightArrowClick = () => {
    if (currentIndex + 6 >= Films.length) return;
    setCurrentIndex(currentIndex + 6);
    setItems(Films.slice(currentIndex + 6, currentIndex + 12).map((item) => ({ ...item, isShown: false })));
  };

  const handleLeftArrowClick = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 6);
    setItems(Films.slice(currentIndex - 6, currentIndex).map((item) => ({ ...item, isShown: false })));
  };

  const handleMouseEnter = (index) => {
    const newItems = [...items];
    newItems[index].isShown = true;
    setItems(newItems);
  };

  const handleMouseLeave = (index) => {
    const newItems = [...items];
    newItems[index].isShown = false;
    setItems(newItems);
  };

  return (
    <div className="SliderContainer">
      <button className="SliderButton" onClick={handleLeftArrowClick}>
        <SlArrowLeft className="SliderArrow" />
      </button>
      {items &&
        items.map((item, index) => (
          <div
            className="item"
            key={item.imdbID}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img src={item.Poster} alt="img" />
            {item.isShown && (
              <div className="DivForDeatails">
                <Link to={"/moviedetailsm/" + item.imdbID}>
                  <button className="ButtonForDeatails">More Info</button>
                </Link>
              </div>
            )}
          </div>
        ))}
      <button className="SliderButton" onClick={handleRightArrowClick}>
        <SlArrowRight className="SliderArrow" />
      </button>
    </div>
  );
};

export default Slider;
