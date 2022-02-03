import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgdeletePopUp } from "../../assets/images";
import { deleteData } from "../../utils/lib/api";
import { StBtnCancel, StBtnDelete, StBtnWrapper, StDetail, StPopUp, StPopUpWrpper, StQuestion } from "./styled/PopUp";

interface PopUpDeleteProps {
  onPopUp: () => void;
  reviewId: number;
  handleBookDelete: () => void;
}

export default function PopUpDelete(props: PopUpDeleteProps) {
  const { onPopUp, reviewId, handleBookDelete } = props;

  const tempToken = localStorage.getItem("booktez-token");
  const token = tempToken ? tempToken : "";

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleDelete = async () => {
    try {
      await deleteData(`/review/${reviewId}`, token);
      onPopUp();
      handleBookDelete(); //리렌더링
      if (pathname === "/detail-book-note") {
        navigate("/main/bookcase");
      }
    } catch (err) {
      return;
    }
  };

  return (
    <StPopUpWrpper>
      <StPopUp>
        <StImg src={ImgdeletePopUp} alt="독서 전 단계 완료" />
        <StQuestion>삭제하시겠어요?</StQuestion>
        <StDetail>삭제한 기록은 복구가 어려워요!</StDetail>
        <StBtnWrapper>
          <StBtnCancel type="button" onClick={onPopUp}>
            취소
          </StBtnCancel>
          <StBtnDelete type="button" onClick={handleDelete}>
            삭제
          </StBtnDelete>
        </StBtnWrapper>
      </StPopUp>
    </StPopUpWrpper>
  );
}

const StImg = styled.img`
  width: 12.6rem;
  height: 12.6rem;

  margin-bottom: 2.1rem;
`;
