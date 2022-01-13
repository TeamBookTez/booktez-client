import { useState } from "react";
import styled, { css } from "styled-components";

import { IcCancel, IcSearch } from "../../assets/icons";
import { LabelHidden } from "../common";

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchBar(props: SearchBarProps) {
  const { setQuery } = props;
  const [isQueryEmpty, setIsQueryEmpty] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;

    setQuery(text);
  };

  return (
    <StWrapper>
      <SearchBarWrapper isQueryEmpty={isQueryEmpty}>
        <StIcSearch isQueryEmpty={isQueryEmpty} />

        <LabelHidden htmlFor="addBookSearch">검색</LabelHidden>
        <InputSearch
          onChange={handleChange}
          type="text"
          id="addBookSearch"
          placeholder="책 제목 또는 지은이를 입력해주세요."
        />
        <StIcCancel isQueryEmpty={isQueryEmpty} />
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

const SearchBarWrapper = styled.div<{ isQueryEmpty: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  margin: 0 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white200};

  height: 5.6rem;

  &:focus-within,
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray100};
  }

  ${({ isQueryEmpty }) =>
    isQueryEmpty
      ? ""
      : css`
          border: 0.2rem solid ${({ theme }) => theme.colors.gray100};
        `}
`;

const StIcSearch = styled(IcSearch)<{ isQueryEmpty: boolean }>`
  margin-left: 1.5rem;
  margin-right: 2.7rem;

  width: 2.2rem;
  height: 2.2rem;

  ${({ isQueryEmpty }) =>
    isQueryEmpty
      ? css`
          fill: ${({ theme }) => theme.colors.white500};
        `
      : css`
          fill: ${({ theme }) => theme.colors.gray300};
        `}
`;

const InputSearch = styled.input`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white200};

  color: ${({ theme }) => theme.colors.gray100};
  font: ${({ theme }) => theme.fonts.body3};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const StIcCancel = styled(IcCancel)<{ isQueryEmpty: boolean }>`
  margin-right: 1.5rem;

  ${({ isQueryEmpty }) => (isQueryEmpty ? "display: none;" : "")}

  &:hover {
    cursor: pointer;
  }
`;
