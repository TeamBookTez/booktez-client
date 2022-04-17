import styled from "styled-components";

import { IcToastAlert } from "../../assets/icons";
import { StIcCancelWhite } from "../common/styled/NoteModalWrapper";

export default function AlertToast() {
  return (
    <StSaveWrapper>
      <StIconTextWrapper>
        <IcToastAlert />
        <div>
          <StToastH1>이미 추가된 책입니다.</StToastH1>
          <StToastSpan>다른 책을 추가해주세요</StToastSpan>
        </div>
      </StIconTextWrapper>
      <StIcCancel />
    </StSaveWrapper>
  );
}

const StSaveWrapper = styled.div`
  position: absolute;
  top: -4rem;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  box-shadow: 0.1rem 0.3rem 0.9rem 0.3rem #0000001c;
  border-radius: 0.8rem;
  padding: 1.3rem 1.9rem;
  background-color: ${({ theme }) => theme.colors.white};

  width: 38.8rem;
  height: 7.9rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

const StIconTextWrapper = styled.div`
  display: flex;
  column-gap: 1.3rem;
`;

const StToastH1 = styled.h1`
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.fonts.body0};
  font-weight: 600;
`;

const StToastSpan = styled.span`
  ${({ theme }) => theme.fonts.h5};
`;

const StIcCancel = styled(StIcCancelWhite)`
  position: static;
  width: 3.2rem;
  height: 3.2rem;
`;
