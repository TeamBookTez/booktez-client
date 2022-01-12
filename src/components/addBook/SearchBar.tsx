import { useState } from "react";
import styled, { css } from "styled-components";

import { IcCancel, IcSearch } from "../../assets/icons";
import { LabelHidden } from "../common";

export default function SearchBar() {
  const [isQueryEmpty, setIsQueryEmpty] = useState<boolean>(true);

  const checkIsQueryEmpty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsQueryEmpty(e.target.value === "");
  };

  // const cancelQuery = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  //   if (e.currentTarget === null) return;
  //   const prevInput = e.currentTarget.previousElementSibling[0];

  //   if (prevInput === null) return;
  //   if ("value" in prevInput) console.log("dlTDj!");
  //   console.log(prevInput.currentTarget);
  //   const prevInputValue = prevInput.value;

  //   if (prevInputValue === null) return;
  //   console.log(prevInput.value);
  // };

  return (
    <StWrapper>
      <SearchBarWrapper isQueryEmpty={isQueryEmpty}>
        <StIcSearch isQueryEmpty={isQueryEmpty} />
        <LabelHidden htmlFor="addBookSearch">검색</LabelHidden>
        <InputSearch
          type="text"
          id="addBookSearch"
          placeholder="책 제목 또는 지은이를 입력해주세요."
          onChange={checkIsQueryEmpty}
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

  margin: 0 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white200};

  height: 5.6rem;

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
  background-color: ${({ theme }) => theme.colors.white200};
  color: ${({ theme }) => theme.colors.gray100};

  width: 100%;
  height: 1.8rem;

  &::placeholder {
    /* 글꼴 설정 */
    font-family: pretendard;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.34rem;
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
