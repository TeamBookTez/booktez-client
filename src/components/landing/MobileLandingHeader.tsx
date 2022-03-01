import React from "react";
import styled from "styled-components";

import { IcLandingMobileHeader } from "../../assets/icons";

export default function MobileLandingHeader() {
  return (
    <StHeader>
      <IcLandingMobileHeader />
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;

  max-width: 32rem;
  margin: 0 auto;
`;
