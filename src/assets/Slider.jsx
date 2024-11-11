import React from 'react';

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-track italic ">
          <div className="slide">React</div>
          <div className="slide">Tailwind</div>
          <div className="slide">ChartJs</div>
          <div className="slide">Covid19.api</div>
          {/* Duplicate items for seamless looping */}
          <div className="slide">React</div>
          <div className="slide">Tailwind</div>
          <div className="slide">ChartJs</div>
          <div className="slide">Covid19.api</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
