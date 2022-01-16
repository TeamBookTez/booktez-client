import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import { IcEditProfile } from "../../assets/icons";
import { ImgUser } from "../../assets/images";
import { patchData } from "../../utils/lib/api";

export default function TopBanner() {
  const [userImg, setUserImg] = useState(ImgUser);
  const token = `${process.env.REACT_APP_TEST_TOKEN}`;
  const patchKey = "/user/img";

  const patchImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (e.target.files !== null) {
      const imgFile = e.target.files[0];

      formData.append("img", imgFile);

      try {
        const { data } = await patchData(token, patchKey, formData);

        console.log("data", data);
        if (data.success) {
          setUserImg(data.img);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("err", err.response?.data);
        }
      }
    }
  };

  return (
    <StBanner>
      <StProfile>
        <StProfileImgBox>
          <StUserImgWrapper>
            <img src={userImg} alt="유저 이미지" />
          </StUserImgWrapper>
          <StIcEditProfile htmlFor="input-file">
            <StIcEditProfileImg />
          </StIcEditProfile>
          <StFileInput id="input-file" type="file" onChange={patchImage} accept="image/jpg, image/png, image/jpeg" />
        </StProfileImgBox>
        <StProfileContent>
          <StUserName>석상언</StUserName>
          <StEmail>tjr50999@naver.com</StEmail>
        </StProfileContent>
      </StProfile>
    </StBanner>
  );
}

const StBanner = styled.div`
  position: relative;

  width: 100%;
  height: 23.2rem;

  margin-bottom: 1.6rem;

  border-radius: 2rem 2rem 0 0;

  background-color: ${({ theme }) => theme.colors.white300};
`;

const StProfile = styled.div`
  position: absolute;
  bottom: -40%;
  left: 4%;

  display: flex;
  align-items: flex-end;
`;

const StProfileImgBox = styled.div`
  position: relative;

  width: 16rem;

  margin-right: 3.4rem;
`;

const StIcEditProfile = styled.label`
  position: absolute;
  bottom: 0.3rem;
  right: -1.3rem;
`;

const StIcEditProfileImg = styled(IcEditProfile)`
  cursor: pointer;
`;

const StFileInput = styled.input`
  display: none;
`;

const StUserImgWrapper = styled.div`
  width: 17.2rem;
  height: 17.2rem;

  border: 0.6rem solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const StProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
`;

const StUserName = styled.h3`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.header3};
  color: ${({ theme }) => theme.colors.gray100};
`;

const StEmail = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: #939393;
`;
