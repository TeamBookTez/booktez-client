import styled from "styled-components";

import theme from "../../styles/theme";
import LabelQuestion from "../common/styled/LabelQuestion";

export default function PeriNoteExample() {
  return (
    <>
      <StQuestion>
        <LabelQuestion bgColor={theme.colors.orange100} />나 자신의 Why를 발견하는 방법은 무엇일까?
      </StQuestion>
      {/* depth 1 */}
      <article>
        <StAnswer>파트너를 구한다.</StAnswer>
        {/* depth 2 */}
        <article>
          <StQuestion>
            <LabelQuestion bgColor={theme.colors.orange300} />
            파트너의 역할 가이드는 무엇인가?
          </StQuestion>
          <StAnswer>상대의 과거 스토리에 귀를 기울여야 한다.</StAnswer>
          {/* depth 3 */}
          <article>
            <StQuestion>
              <LabelQuestion bgColor={theme.colors.orange400} />
              능동적 청취자가 되는 법?
            </StQuestion>
            <StAnswer>상대의 말 속에 숨겨진 의미와 동기, 감정을 이해해야 한다</StAnswer>
            <StAnswer>이를 위해 눈을 맞추고, 비언어적으로 호응하자</StAnswer>
          </article>
          <StAnswer>
            왜?는 앞으로의 삶의 자게를 찾는 것이 아니라, 자연스러운 최고의 모습일 때의 그 사람을 나타내는 것이다.
          </StAnswer>
        </article>
        <StAnswer>파트너를 만나기 전에 할 일 - 스토리 수집</StAnswer>
        {/* depth 2 */}
        <article>
          <StQuestion>
            <LabelQuestion bgColor={theme.colors.orange300} />
            스토리 수집 가이드라인?
          </StQuestion>
          <StAnswer>
            지금의 내가 완성되는데 정말로 큰 영향을 끼친, 내 인생 속 구체적 경험이나 인물들을 떠올려 보자.
          </StAnswer>
          <StAnswer>
            왜?는 과거로부터 나오기에 태어난 순간부터 지금까지의 어떤 것이든 스토리로 선택해도 된다. 지금의 내가 되는
            데에 이바지한 경험이라는 점에서는 모두 중요하다.
          </StAnswer>
          {/* depth 3 */}
          <article>
            <StQuestion>
              <LabelQuestion bgColor={theme.colors.orange400} />
              스토리 수집에 도움 되는 질문?
            </StQuestion>
            <StAnswer>최악의 날을 떠올려보자. 무슨 일이 있었는가?</StAnswer>
            <StAnswer>학교에서 내가 정말 좋아했던 활동은 무엇인가?</StAnswer>
            <StAnswer>인상의 방향이 완전히 달라졌음을 느꼈던 인생의 가장 결정적 순간은 언제인가?</StAnswer>
          </article>
        </article>
      </article>
    </>
  );
}

const StQuestion = styled.ul`
  ${({ theme }) => theme.fonts.body2};
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray200};
  text-align: start;
`;

const StAnswer = styled.li`
  list-style: none;

  position: relative;

  margin-top: 1.7rem;
  margin-bottom: 2.4rem;
  padding-left: 5.7rem;

  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.gray400};
  white-space: pre-wrap;
  text-align: start;

  &::before {
    content: "";
    position: absolute;
    left: 3.4rem;
    top: 0.82rem;

    width: 0.7rem;
    height: 0.7rem;

    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;
