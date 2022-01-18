import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcDeleteNote, IcModifyNote } from "../assets/icons";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";
import { ExamplePeriNote, ExamplePreNote } from "../components/detail";
import DetailArticleWrapper from "../components/detail/DetailArticleWrapper";

export default function DetailBookNote() {
  const navigate = useNavigate();

  return (
    <StNoteModalWrapper>
      <StIcCancelWhite onClick={() => navigate(-1)} />
      <StBookTitle>엉덩이 탐정 뿡뿡</StBookTitle>
      <StBtnWrapper>
        <IcDeleteNote />
        <IcModifyNote />
      </StBtnWrapper>
      <DetailArticleWrapper title="독서 전 단계">
        <ExamplePreNote />
      </DetailArticleWrapper>
      <DetailArticleWrapper title="독서 중 단계">
        <ExamplePeriNote />
      </DetailArticleWrapper>
    </StNoteModalWrapper>
  );
}

const StBtnWrapper = styled.div`
  text-align: right;

  & > svg {
    &:hover {
      cursor: pointer;
    }
  }
  & > svg:not(:first-child) {
    margin-left: 1.4rem;
  }
`;
