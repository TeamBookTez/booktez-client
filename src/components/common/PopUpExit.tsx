import styled from "styled-components";

import { StBtnCancel, StBtnDelete, StBtnWrapper, StDetail, StPopUp, StPopUpWrpper, StQuestion } from "./styled/PopUp";

const StTemp = styled.div`
  width: 100%;
  height: 16.1rem;
`;

export default function PopUpLayout() {
  return (
    <StPopUpWrpper>
      <StPopUp>
        {/* 일러스트 div */}
        <StTemp></StTemp>
        <StQuestion>현재 페이지에서 나가시겠어요?</StQuestion>
        <StDetail>변경사항이 저장되지 않을 수도 있어요!</StDetail>
        <StBtnWrapper>
          <StBtnCancel type="button">취소</StBtnCancel>
          <StBtnDelete type="button">삭제</StBtnDelete>
        </StBtnWrapper>
      </StPopUp>
    </StPopUpWrpper>
  );
}
