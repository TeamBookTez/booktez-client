import { debounce } from "lodash";
import React, { useState } from "react";
import styled, { css } from "styled-components";

import { IcCancel, IcSearch } from "../../assets/icons";
import { LabelHidden } from "../common";

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchBar(props: SearchBarProps) {
  const { setQuery } = props;
  const [isQueryEmpty, setIsQueryEmpty] = useState<boolean>(true);

  const debouncingQuery = debounce((searchingText: string) => setQuery(searchingText), 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;

    setIsQueryEmpty(text === "");
    debouncingQuery(text);
  };

  return (
    <StWrapper>
      <SearchBarWrapper isqueryempty={isQueryEmpty}>
        <StIcSearch isqueryempty={isQueryEmpty} />

        <LabelHidden htmlFor="addBookSearch">검색</LabelHidden>
        <InputSearch
          onChange={handleChange}
          type="text"
          id="addBookSearch"
          placeholder="책 제목 또는 지은이를 입력해주세요."
        />
        <StIcCancel isqueryempty={isQueryEmpty} />
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

const SearchBarWrapper = styled.div<{ isqueryempty: boolean }>`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0.2rem solid ${({ theme }) => theme.colors.white200};
  margin: 0 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white200};

  height: 5.6rem;

  ${({ isqueryempty }) =>
    isqueryempty
      ? css`
          border: 0.2rem solid ${({ theme }) => theme.colors.white200};
        `
      : css`
          border: 0.2rem solid ${({ theme }) => theme.colors.gray100};
        `}
`;

const StIcSearch = styled(IcSearch)<{ isqueryempty: boolean }>`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;

  width: 3.2rem;
  height: 3.2rem;

  ${({ isqueryempty }) =>
    isqueryempty
      ? css`
          fill: ${({ theme }) => theme.colors.white500};
        `
      : css`
          fill: ${({ theme }) => theme.colors.gray300};
        `}
`;

const InputSearch = styled.input`
  width: 100%;

  padding-left: 6.4rem;

  background-color: ${({ theme }) => theme.colors.white200};

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const StIcCancel = styled(IcCancel)<{ isqueryempty: boolean }>`
  margin-right: 1.5rem;

  ${({ isqueryempty }) => (isqueryempty ? "display: none;" : "")}

  &:hover {
    cursor: pointer;
  }
`;
