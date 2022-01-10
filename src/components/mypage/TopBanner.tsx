import React from "react";
import styled from "styled-components";

import { IcEditProfile } from "../../assets/icons";
import { ImgUser } from "../../assets/images";

export default function TopBanner() {
  return (
    <StBanner>
      <StProfile>
        <StProfileImg>
          <StUserImg src={ImgUser} alt="유저 이미지" />
          <StIcEditProfile />
        </StProfileImg>
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
  top: 15.5rem;
  left: 4.8rem;

  display: flex;
  align-items: flex-end;
`;

const StProfileImg = styled.div`
  position: relative;

  width: 16rem;

  margin-right: 3.4rem;
`;

const StIcEditProfile = styled(IcEditProfile)`
  position: absolute;
  bottom: 0.3rem;
  right: -1.3rem;
`;

const StUserImg = styled.img``;

const StProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
`;

const StUserName = styled.h3`
  margin-bottom: 0.8rem;

  font-family: Pretendard;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 2.9rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const StEmail = styled.p`
  font-family: Pretendard;
  font-size: 1.8rem;
  line-height: 2.3rem;
  letter-spacing: -0.01rem;
  color: #939393; ;
`;
