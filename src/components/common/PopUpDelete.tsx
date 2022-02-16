import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgDeletePopUp } from "../../assets/images";
import { deleteData } from "../../utils/lib/api";
import { StBtnCancel, StBtnDelete, StBtnWrapper, StDetail, StPopUp, StPopUpWrapper, StQuestion } from "./styled/PopUp";

interface PopUpDeleteProps {
  onPopUp: () => void;
  reviewId: number;
}

export default function PopUpDelete(props: PopUpDeleteProps) {
  const { onPopUp, reviewId } = props;

  const tempToken = localStorage.getItem("booktez-token");
  const token = tempToken ? tempToken : "";

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // query client에 접근
  const queryClient = useQueryClient();
  const mutation = useMutation(() => deleteData(`/review/${reviewId}`, token), {
    onSuccess: () => {
      // queryClient에 저장된 bookcase에 해당되는 데이터를 invalidate하고 refetch함
      queryClient.invalidateQueries("bookcase");
    },
  });

  const handleDelete = async () => {
    try {
      mutation.mutate();
      onPopUp();
      if (pathname === "/detail-book-note") {
        navigate("/main/bookcase");
      }
    } catch (err) {
      return;
    }
  };

  return (
    <StPopUpWrapper>
      <StPopUp>
        <StImg src={ImgDeletePopUp} alt="독서 전 단계 완료" />
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
    </StPopUpWrapper>
  );
}

const StImg = styled.img`
  width: 12.6rem;
  height: 12.6rem;

  margin-bottom: 2.1rem;
`;
