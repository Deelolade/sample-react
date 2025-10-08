import React from 'react'

const Home = () => {
  return (
    <div className="concept-container">
      <h1 className="concept-title">JSX & Components Demo</h1>

      <div className="concept-card">
        <p className="concept-text">
          <strong>JSX:</strong> lets you write <code>HTML-like syntax</code> inside JavaScript.
        </p>

        <p className="concept-text">
          <strong>Components:</strong> are reusable UI blocks.
        </p>
      </div>
    </div>
  );
}

export default Home
