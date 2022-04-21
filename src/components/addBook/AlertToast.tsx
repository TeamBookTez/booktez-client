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
  top: 6.9rem;
  right: 4rem;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  // shadow가 피그마대로 하면 너무 진함
  box-shadow: 0.05rem 0.15rem 0.45rem 0.15rem #dddddd0c;
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
