import React from 'react';

import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  let color = `rgb(${r}, ${g}, ${b})`;
  let border = '2px solid black';
  console.log(color);
  return (
    <div className="boxes" style={{ backgroundColor: color, border: border }}>
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
