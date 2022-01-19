import styled from "styled-components";

interface DetailArticleWrapperProps {
  title: string;
  children: React.ReactNode;
}

const IIIIIII = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background-color: black;
`;

export default function DetailArticleWrapper(props: DetailArticleWrapperProps) {
  const { title, children } = props;

  return (
    <section>
      <StTitleWrapper>
        {/* 이미지 div */}
        <IIIIIII></IIIIIII>
        <StTitle>{title}</StTitle>
      </StTitleWrapper>
      {children}
    </section>
  );
}

const StTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StTitle = styled.h3`
  margin-left: 0.5rem;

  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray100};
`;
