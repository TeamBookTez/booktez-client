import styled from "styled-components";

import {
  LandingFive,
  LandingFooter,
  LandingFour,
  LandingHeader,
  LandingOne,
  LandingThree,
  LandingTwo,
} from "../components/landing";

export default function Landing() {
  return (
    <>
      <LandingHeader />
      <StMain>
        <LandingOne />
        <LandingTwo />
        <LandingThree />
        <LandingFour />
        <LandingFive />
      </StMain>
      <LandingFooter />
    </>
  );
}

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 11.5rem;
`;
