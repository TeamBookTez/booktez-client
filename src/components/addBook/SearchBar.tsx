import styled from "styled-components";

import { IcCancel, IcSearch } from "../../assets/icons";

export default function SearchBar() {
  return (
    <StWrapper>
      <SearchBarWrapper>
        <StIcSearch />
        <InputSearch type="text" placeholder="책 제목 또는 지은이를 입력해주세요." />
        <StIcCancel />
      </SearchBarWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section`
  position: sticky;
  top: 0;

  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 3.1rem;
  padding-bottom: 3.5rem;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white200};

  height: 5.6rem;
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
  margin-right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;
