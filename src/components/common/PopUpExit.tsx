import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgExit } from "../../assets/images";
import { StBtnCancel, StBtnDelete, StBtnWrapper, StDetail, StPopUp, StPopUpWrapper, StQuestion } from "./styled/PopUp";

export const StTemp = styled.div`
  width: 100%;
  height: 16.1rem;
`;

interface PopUpExitProps {
  onExit: () => void;
}

export default function PopUpExit(props: PopUpExitProps) {
  const { onExit } = props;

  return (
    <StPopUpWrapper>
      <StPopUp>
        <StImg src={ImgExit} alt="페이지 나가기" />
        <StQuestion>현재 페이지에서 나가시겠어요?</StQuestion>
        <StDetail>변경사항이 저장되지 않을 수도 있어요!</StDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={onExit}>
            취소
          </StBtnCancel>
          <StBtnDelete type="button">
            <StLink to="/main/bookcase">나가기</StLink>
          </StBtnDelete>
        </StBtnWrapper>
      </StPopUp>
    </StPopUpWrapper>
  );
}

const StImg = styled.img`
  margin-bottom: 1.2rem;
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
