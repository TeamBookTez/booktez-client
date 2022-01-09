import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StNav>
      <StUl>
        <StList>
          <Link to="/total">전체</Link>
        </StList>
        <StList>
          <Link to="/pre">독서 전</Link>
        </StList>
        <StList>
          <Link to="/peri">독서 중</Link>
        </StList>
        <StList>
          <Link to="/post">독서 완료</Link>
        </StList>
      </StUl>
      <StBottomLine>
        <span></span>
      </StBottomLine>
    </StNav>
  );
}

const StNav = styled.nav`
  position: relative;
  width: 100%;
  padding-left: 4rem;
`;

const StUl = styled.ul`
  display: flex;
`;

const StList = styled.li`
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.8rem;
    height: 4.8rem;

    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.3rem;
    letter-spacing: -0.1;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray100};
  }
`;

const StBottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 35.2rem;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white200};
  & > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 8.8rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.orange100};
  }
`;
