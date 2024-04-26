import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ height: '100vh', backgroundColor }}>
      <div className="color-picker-container">
        <HexColorPicker color={backgroundColor} onChange={handleColorChange} className="color-picker" />
        <div className="color-code">{backgroundColor}</div>
      </div>
    </div>
  );
}

export default App;