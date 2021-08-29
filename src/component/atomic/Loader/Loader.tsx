import React from "react";
import styled from "styled-components";

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: "75vh";
`;

function Loader() {
  return (
    <Load>
      <h5>LOADING...</h5>
    </Load>
  );
}

export default Loader;
