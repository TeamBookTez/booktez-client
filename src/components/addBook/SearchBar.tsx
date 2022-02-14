import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import styled, { css } from "styled-components";

import { IcCancel, IcSearch } from "../../assets/icons";
import { LabelHidden } from "../common/styled/LabelHidden";

interface SearchBarProps {
  debounceQuery: string;
  onDebounceQuery: (tempQuery: string) => void;
}
export default function SearchBar(props: SearchBarProps) {
  const { debounceQuery, onDebounceQuery } = props;
  const shadowingAni = useAnimation();
  const { scrollY } = useViewportScroll();
  const MAIN_HEADER_HEIGHT = 109;

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > MAIN_HEADER_HEIGHT) {
        shadowingAni.start({
          boxShadow: "0rem 0.6rem 1rem rgba(0, 0, 0, 0.17)",
        });
      } else {
        shadowingAni.start({
          boxShadow: "initial",
        });
      }
    });
  }, [scrollY]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;

    onDebounceQuery(text);
  };

  const handleCancel = () => {
    onDebounceQuery("");
  };

  return (
    <StWrapper animate={shadowingAni} initial={{ boxShadow: "initial" }}>
      <SearchBarWrapper isqueryempty={debounceQuery}>
        <StIcSearch isqueryempty={debounceQuery} />

        <LabelHidden htmlFor="addBookSearch">검색</LabelHidden>
        <InputSearch
          onChange={handleChange}
          type="text"
          value={debounceQuery}
          id="addBookSearch"
          placeholder="책 제목 또는 지은이를 입력해주세요."
        />
        <StIcCancel onClick={handleCancel} isqueryempty={debounceQuery} />
      </SearchBarWrapper>
    </StWrapper>
  );
}

const StWrapper = styled(motion.section)`
  position: sticky;
  top: 0;

  padding-top: 3.1rem;
  padding-bottom: 3.5rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const SearchBarWrapper = styled.div<{ isqueryempty: string }>`
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
    isqueryempty === ""
      ? css`
          border: 0.2rem solid ${({ theme }) => theme.colors.white200};
        `
      : css`
          border: 0.2rem solid ${({ theme }) => theme.colors.gray100};
        `}
`;

const StIcSearch = styled(IcSearch)<{ isqueryempty: string }>`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;

  width: 3.2rem;
  height: 3.2rem;

  ${({ isqueryempty }) =>
    isqueryempty === ""
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

const StIcCancel = styled(IcCancel)<{ isqueryempty: string }>`
  margin-right: 1.5rem;

  ${({ isqueryempty }) => (isqueryempty === "" ? "display: none;" : "")}

  &:hover {
    cursor: pointer;
  }
`;
