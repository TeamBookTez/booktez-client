import styled, { ThemeContext } from "styled-components";

import { IcCancel, IcSearch } from "../../assets/icons";

export default function SearchBar() {
  return (
    <StSearchBar>
      <SearchBarWrapper>
        <StIcSearch />
        <InputSearch type="text" placeholder="책 제목 또는 지은이를 입력해주세요." />
        <StIcCancel />
      </SearchBarWrapper>
    </StSearchBar>
  );
}

const StSearchBar = styled.section`
  margin: 0 4rem;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white200};

  border-radius: 1rem;

  height: 5.6rem;

  &:focus-within {
    border: 0.2rem solid ${({ theme }) => theme.colors.gray100}; // border로 인해 크기변경 문제를 수정해야 함.
  }
`;

const StIcSearch = styled(IcSearch)`
  margin-left: 1.5rem;
  margin-right: 2.7rem;

  width: 2.2rem;
  height: 2.2rem;
`;

const InputSearch = styled.input`
  background-color: ${({ theme }) => theme.colors.white200};

  width: 100%;
  height: 1.8rem;

  &::placeholder {
    font-family: pretendard;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.34rem;
    color: ${({ theme }) => theme.colors.white500};
  }
`;

const StIcCancel = styled(IcCancel)`
  width: 2.7rem;
  height: 2.7rem;

  margin-right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;
