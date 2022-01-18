import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IcDeleteNote, IcModifyNote } from "../assets/icons";
import { StBookTitle, StIcCancelWhite, StNoteModalWrapper } from "../components/common/styled/NoteModalWrapper";

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
