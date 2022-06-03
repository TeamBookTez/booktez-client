import styled from "styled-components";

import { IcAlert } from "../../assets/icons";

interface AlertLabelProps {
  children: string;
}

export default function AlertLabel(props: AlertLabelProps) {
  const { children } = props;

  return (
    <StLabelWrapper>
      <StAlert />
      <StStrong>{children}</StStrong>
    </StLabelWrapper>
  );
}

const StLabelWrapper = styled.p`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.4rem;
  margin: 1.3rem 0 0 0.4rem;
`;

const StAlert = styled(IcAlert)`
  height: 100%;
  width: auto;
  margin-right: 0.4rem;
`;

const StStrong = styled.strong`
  display: flex;
  align-items: center;
  /* 임의 폰트 */
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.red100};
`;
