import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { FaEdit, FaCopy, FaCheck } from "react-icons/fa"; // Import icons
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [buttonColor, setButtonColor] = useState("#007bff");

  const [editMode, setEditMode] = useState({
    background: false,
    text: false,
    button: false,
  });

  const handleInputChange = (e, setColor) => {
    const value = e.target.value;
    if (value.startsWith("#") && value.length <= 7) {
      setColor(value);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Color code "${text}" copied to clipboard!`))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const handleEditClick = (colorType) => {
    setEditMode((prev) => ({
      ...prev,
      [colorType]: !prev[colorType],
    }));
  };

  const renderColorPicker = (color, setColor, colorType) => (
    <>
      <HexColorPicker
        color={color}
        onChange={setColor}
        className="color-picker"
      />
      <div className="color-display">
        {!editMode[colorType] && (
          <>
            <div className="color-code">{color}</div>
            <button className="icon-button" onClick={() => copyToClipboard(color)}>
              <FaCopy />
            </button>
            <button className="icon-button" onClick={() => handleEditClick(colorType)}>
              <FaEdit />
            </button>
          </>
        )}
      </div>
      {editMode[colorType] && (
        <div className="edit-input-container">
          <input
            type="text"
            value={color}
            onChange={(e) => handleInputChange(e, setColor)}
            className="color-code-input"
            maxLength={7}
          />
          <button className="icon-button" onClick={() => handleEditClick(colorType)}>
            <FaCheck />
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="App" style={{ minHeight: "100vh", backgroundColor }}>
      <div className="triangle-layout">
        {/* Background Color */}
        <div className="color-picker-group">
          <h2 className="color-header">Background</h2>
          {renderColorPicker(backgroundColor, setBackgroundColor, "background")}
        </div>

        <div className="center-demo">
          <div className="preview">
            <h1 style={{ color: textColor }}>Website Title</h1>
            <p style={{ color: textColor }}>This is a sample text for your website.</p>
            <button style={{ backgroundColor: buttonColor, color: textColor }}>Click Me</button>
          </div>
        </div>

        <div className="color-pickers-row">
          {/* Text Color */}
          <div className="color-picker-group">
            <h2 className="color-header">Text</h2>
            {renderColorPicker(textColor, setTextColor, "text")}
          </div>

          {/* Button Color */}
          <div className="color-picker-group">
            <h2 className="color-header">Button</h2>
            {renderColorPicker(buttonColor, setButtonColor, "button")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
