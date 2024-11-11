import React from 'react';
import video from './assets/Video.mp4';

const Video = () => {
  const style = {
    width: '100%',        
    height: '100%',       
    objectFit: 'cover',   
    borderRadius: '10px',
  };

  return (
    <div style={{ width: '700px', height: '400px',  borderRadius:'10px' , boxShadow:'0 0 20px 0 grey'
    }}>
      <video autoPlay loop muted style={style}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
