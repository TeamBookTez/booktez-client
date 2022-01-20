import styled from "styled-components";

import { ImgPreBook } from "../../../assets/images";
import {
  StBtnCancel,
  StBtnDelete,
  StBtnWrapper,
  StDetail,
  StPopUp,
  StPopUpWrpper,
  StQuestion,
} from "../../common/styled/PopUp";

interface PopUpPreDoneProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export default function PopUpPreDone(props: PopUpPreDoneProps) {
  const { onSubmit, onCancel } = props;

  return (
    <StPopUpWrpper>
      <StPopUp>
        <StImg src={ImgPreBook} alt="독서 전 단계 완료" />
        <StQuestion>독서 전 단계를 완료하셨나요?</StQuestion>
        <StDetail>질문리스트와 함께 본격적으로 책을 펼쳐봐요!</StDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={onCancel}>
            취소
          </StBtnCancel>
          <StBtnDelete type="button" onClick={onSubmit}>
            다음
          </StBtnDelete>
        </StBtnWrapper>
      </StPopUp>
    </StPopUpWrpper>
  );
}

const StImg = styled.img`
  margin-bottom: 2.1rem;
`;
