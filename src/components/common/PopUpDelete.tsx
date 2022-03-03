import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useSWRConfig } from "swr";

import { ImgDeletePopUp } from "../../assets/images";
import { navigatingBookInfoState } from "../../utils/atom";
import { deleteData } from "../../utils/lib/api";
import { StBtnCancel, StBtnDelete, StBtnWrapper, StDetail, StPopUp, StPopUpWrapper, StQuestion } from "./styled/PopUp";

interface PopUpDeleteProps {
  onPopUp: () => void;
  pathKey: string;
  reviewId: number;
}

export default function PopUpDelete(props: PopUpDeleteProps) {
  const { onPopUp, pathKey, reviewId } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { mutate } = useSWRConfig();

  const _token = localStorage.getItem("booktez-token");
  const userToken = _token ? _token : "";

  const handleDelete = async () => {
    try {
      await deleteData(`/review/${reviewId}`, userToken);
      onPopUp();
      mutate(pathKey);
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
