import styled from "styled-components";

import { StBtnCancel, StBtnDelete, StBtnWrapper, StDetail, StPopUp, StPopUpWrpper, StQuestion } from "./styled/PopUp";

const StTemp = styled.div`
  width: 100%;
  height: 16.1rem;
`;

interface PopUpDeleteProps {
  onPopUp: () => void;
}

export default function PopUpDelete(props: PopUpDeleteProps) {
  const { onPopUp } = props;

  return (
    <StPopUpWrpper>
      <StPopUp>
        {/* 일러스트 div */}
        <StTemp></StTemp>
        <StQuestion>삭제하시겠어요?</StQuestion>
        <StDetail>삭제한 기록은 복구가 어려워요!</StDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={onPopUp}>
            취소
          </StBtnCancel>
          <StBtnDelete type="button">삭제</StBtnDelete>
        </StBtnWrapper>
      </StPopUp>
    </StPopUpWrpper>
  );
}
