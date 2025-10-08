import  { useState } from "react";

const InputComponent = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      onSubmit(input); // send data to parent
      setInput(""); // clear field
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        placeholder="Type something and press Enter..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        className="custom-input"
      />
    </div>
  );
};

export default InputComponent;
