import React, { useState } from 'react';
import './ImageSection.css';
import img from './image.png'
const ImageSection = () => {

  return (
    <div
      className="tilt-container"
     
    >
      <img
        src={img}
        alt="Tilted"
        className="tilt-image"
      />
    </div>
  );
};

export default ImageSection;
