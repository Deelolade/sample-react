import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const FetchUser = () => {

  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};
export default FetchUser;
