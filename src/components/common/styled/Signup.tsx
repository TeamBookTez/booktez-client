import styled from "styled-components";

export const StSignupImage = styled.img`
  width: 24.1rem;
  height: 4.3rem;

  display: block;

  margin: 0 auto 5.8rem;
`;

export const StSignupHeading2 = styled.h2`
  margin-bottom: 2.4rem;

  white-space: pre-wrap;
  text-align: center;
  ${({ theme }) => theme.fonts.header0}
`;

export const StSignupParagraph = styled.p`
  margin-bottom: 5.2rem;

  text-align: center;

  ${({ theme }) => theme.fonts.body0}
`;
