import React from "react";
import styled from "styled-components";
import CardComponents from "../../containers/CardComponents";
const ContentsHomepage = () => {
  return (
    <>
      <StyleContents>
        <CardComponents />
      </StyleContents>
    </>
  );
};

export default ContentsHomepage;

const StyleContents = styled.div`
  border: 1px solid black;

  width: 100%;
  height: 500px;
  margin: 0 auto;
`;
