import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [buttonColor, setButtonColor] = useState("#007bff");

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color);
  };

  const handleButtonColorChange = (color) => {
    setButtonColor(color);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Color code "${text}" copied to clipboard!`))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="App" style={{ minHeight: "100vh", backgroundColor }}>
      <div className="color-picker-container">
        <div className="preview">
          <h1 style={{ color: textColor }}>Website Title</h1>
          <p style={{ color: textColor }}>
            This is a sample text for your website.
          </p>
          <button style={{ backgroundColor: buttonColor, color: textColor }}>
            Click Me
          </button>
        </div>
        <div className="color-pickers">
          <div className="color-picker-group">
            <h2 className="color-header">Background</h2>
            <HexColorPicker
              color={backgroundColor}
              onChange={handleBackgroundColorChange}
              className="color-picker"
            />
            <div
              className="color-code"
              onClick={() => copyToClipboard(backgroundColor)}
            >
              {backgroundColor}
            </div>
          </div>
          <div className="color-picker-group">
            <h2 className="color-header">Text</h2>
            <HexColorPicker
              color={textColor}
              onChange={handleTextColorChange}
              className="color-picker"
            />
            <div
              className="color-code"
              onClick={() => copyToClipboard(textColor)}
            >
              {textColor}
            </div>
          </div>
          <div className="color-picker-group">
            <h2 className="color-header">Button</h2>
            <HexColorPicker
              color={buttonColor}
              onChange={handleButtonColorChange}
              className="color-picker"
            />
            <div
              className="color-code"
              onClick={() => copyToClipboard(buttonColor)}
            >
              {buttonColor}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
