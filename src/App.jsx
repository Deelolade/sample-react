import React from "react";
const App = () => {
  const handleClick = () => {
    console.log("Button clicked !!")
  }
  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
