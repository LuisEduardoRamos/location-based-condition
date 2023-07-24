import React, { useRef } from 'react';
import shoeTemplate from '../assets/shoe-template.jpg';

const ItemInspector = () => {
  const imageRef = useRef(null);

  const handleClick = (event) => {
    const image = imageRef.current;
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Clicked at coordinates: (x: ${x}, y: ${y})`);
  };
  return (
    <div>
      <img
        ref={imageRef}
        src={shoeTemplate}
        useMap='#flaw-picker'
        onClick={handleClick}
      />
      <map name='flaw-picker'>
        <area
          shape='rect'
          coords='190,156,375,195'
          alt='toecap'
          onClick={() => {
            console.log('ToeCap Left');
          }}
        ></area>
      </map>
    </div>
  );
};

export default ItemInspector;
