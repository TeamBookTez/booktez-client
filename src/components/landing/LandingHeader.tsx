import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcLandingMobileHeader, IcMainLogo } from "../../assets/icons";
import { Button } from "../common/styled/Button";

export default function LandingHeader() {
  const navigate = useNavigate();

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 320px)",
  });

  return (
    <>
      {isMobileScreen ? (
        <MobileHeader>
          <IcLandingMobileHeader />
        </MobileHeader>
      ) : (
        <StHeader>
          <StLogo />
          <StBtnWrapper>
            <StBtnLogin onClick={() => navigate("/login")}>로그인</StBtnLogin>
            <StBtnSignup onClick={() => navigate("/signup", { state: "rightpath" })}>회원가입</StBtnSignup>
          </StBtnWrapper>
        </StHeader>
      )}
    </>
  );
}

const MobileHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 4rem 5.6rem 4rem 3.4rem;

  width: 100%;
`;

const StLogo = styled(IcMainLogo)`
  width: 25rem;
  height: 5rem;
`;

const StBtnWrapper = styled.div`
  display: flex;
`;

const StBtnLogin = styled(Button)`
  border-radius: 1rem;
  padding: 1.2rem 3.75rem 1.1rem 3.75rem;
  background-color: ${({ theme }) => theme.colors.white300};

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.gray400};

  & + button {
    margin-left: 2.1rem;
  }
`;

const StBtnSignup = styled(Button)`
  border-radius: 1rem;
  padding: 1.2rem 3.05rem 1.1rem 2.95rem;
  background-color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.button}
  color: ${({ theme }) => theme.colors.white};
`;
