import { Outlet, useNavigate } from "react-router-dom";

import { IcSave } from "../assets/icons";
import { Navigator } from "../components/bookNote";
import {
  StBookTitle,
  StIcCancelWhite,
  StNavWrapper,
  StNoteModalWrapper,
} from "../components/common/styled/NoteModalWrapper";

export default function BookNote() {
  const navigate = useNavigate();

  return (
    <StNoteModalWrapper>
      <StIcCancelWhite onClick={() => navigate(-1)} />
      <StBookTitle>엉덩이 탐정 뿡뿡</StBookTitle>
      <StNavWrapper>
        <Navigator />
        <IcSave />
      </StNavWrapper>
      <Outlet />
    </StNoteModalWrapper>
  );
}
