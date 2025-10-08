import { useState } from "react";
import InputComponent from "../components/InputDisplay";
import ConceptDisplay from "../components/ConceptDisplay";
const PropsDisplay = () => {
  const [message, setMessage] = useState("");

  const handleInputSubmit = (text) => {
    setMessage(text);
  };

  return (
    <div>
      <InputComponent onSubmit={handleInputSubmit} />
      <ConceptDisplay title="Live Input Display" message={message} />
    </div>
  );
}

export default PropsDisplay
