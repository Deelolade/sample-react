import React from "react";

const ConceptDisplay = ({ title, message }) => {
  return (
    <div className="concept-container">
      <h1 className="concept-title">{title}</h1>

      <div className="concept-box">
        {message ? (
          <p className="concept-message">{message}</p>
        ) : (
          <p className="concept-placeholder">Start typing to display text!</p>
        )}
      </div>
    </div>
  );
};

export default ConceptDisplay;
