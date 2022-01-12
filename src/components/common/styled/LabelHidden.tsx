import styled from "styled-components";

export const LabelHidden = styled.label`
  // visually hidden
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
