import styled, { css } from "styled-components";

import { IcToastAlert } from "../../assets/icons";
import { StIcCancelWhite } from "../common/styled/NoteModalWrapper";
import { ServerError } from "./BookList";

interface AlertToastProps {
  onCloseAlertToast: () => void;
  isServerError: ServerError;
}

export default function AlertToast(props: AlertToastProps) {
  const { onCloseAlertToast, isServerError } = props;
  const { error, exist, message } = isServerError;

  return (
    <StSaveWrapper>
      <StIconTextWrapper isError={error}>
        <IcToastAlert />
        <div>
          <StToastH1>{error ? "저장에 실패했습니다" : exist ? message : null}</StToastH1>
          <StToastSpan>{error ? message : exist ? "다른 책을 추가해주세요" : null}</StToastSpan>
        </div>
      </StIconTextWrapper>
      <StIcCancel onClick={onCloseAlertToast} />
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

  box-shadow: 0.1rem 0.3rem 0.9rem 0.3rem #0000001c;

  border-radius: 0.8rem;
  padding: 1.3rem 1.9rem;
  background-color: ${({ theme }) => theme.colors.white};

  width: 38.8rem;
  height: 7.9rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

const StIconTextWrapper = styled.div<{ isError: boolean }>`
  display: flex;
  column-gap: 1.3rem;

  ${({ isError }) =>
    isError
      ? css`
          & > svg {
            rect {
              fill: #e35b55;
            }
          }
        `
      : ""}
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
