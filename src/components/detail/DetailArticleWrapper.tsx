import styled from "styled-components";

import { IcDetail } from "../../assets/icons";

interface DetailArticleWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function DetailArticleWrapper(props: DetailArticleWrapperProps) {
  const { title, children } = props;

  return (
    <section>
      <StTitleWrapper>
        <IcDetail />
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
  margin-left: 1rem;

  ${({ theme }) => theme.fonts.header4}
  color: ${({ theme }) => theme.colors.gray100};
`;
