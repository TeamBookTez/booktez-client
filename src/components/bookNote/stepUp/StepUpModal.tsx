import React from "react";
import styled from "styled-components";

import { StIcCancel } from "../../addBook/ShowModal";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";

interface StepUpBoxProps {
  idx: number;
}

interface Contents {
  lifeQuote?: string[];
  public?: string[];
  header: string[];
  desc: string[];
}

export default function StepUpModal(props: StepUpBoxProps) {
  const { idx } = props;

  const contents: Contents = { lifeQuote: [""], public: [""], header: [""], desc: [""] };

  switch (idx) {
    case 1:
      contents.lifeQuote = ["“책은 그것을 적절히 선택할 수 있는 독자에게 갖가지의 즐거움을 안겨준다.”"];
      contents.public = ["- 몽키스테외 -"];
      contents.header = ["방향성을 찾아보세요."];
      contents.desc = [];
      break;
    case 2:
      contents.lifeQuote = [
        "“생각하지 않고 읽는 것은 잘 씹지 않고 먹는 것과 같다.”",
        "책의 제목, 서론에는 저자가 전달하고자 하는 핵심 메시지가 들어있어요.",
        "책의 목차는 핵심 메시지를 효과적으로 전달하기 위해 구성 되었어요.",
      ];
      contents.public = ["- 에드먼드 버크 -"];
      contents.header = ["전략을 세워 보세요.", "방향성을 비교해 보세요.", "기대를 채워줄 부분을 파악해 보세요."];
      contents.desc = [
        "이 책의 핵심은 열정적이고 행복한 삶의 근원이 되는 '왜' 찾는 법을 개인, 조직에 맞게 탐색, 발견, 유지, 공유 방법들에 소개한다.\n나는 개인 수준에서 '왜'를 찾고, 유지할 수 있는 방법이 궁금하다.",
      ];
      break;
    case 3:
      contents.lifeQuote = ["“내가 세계를 알게 된 것은 책에 의해서였다.”"];
      contents.public = ["- 사르트르 -"];
      contents.header = ["스스로에게 질문을 던져 보세요."];
      contents.desc = [
        "이 책의 핵심은 열정적이고 행복한 삶의 근원이 되는 '왜' 찾는 법을 개인, 조직에 맞게 탐색, 발견, 유지, 공유 방법들에 소개한다.\n나는 개인 수준에서 '왜'를 찾고, 유지할 수 있는 방법이 궁금하다.",
      ];
      break;
    default:
      contents.lifeQuote = [];
      contents.public = [];
      contents.header = [
        "본격적으로 책을 읽어봐요!",
        "내가 만든 질문의 답변을 찾아 보세요.",
        "답변에 대한 꼬리 질문을 만들어 보세요.",
      ];
      contents.desc = [
        "왜 why가 중요하다고 주장하는 것일까?",
        "나 자신의 why를 발견하는 방법은 무엇일까?",
        "Why를 항상 살아있게 유지하려면 어떻게 해야할까?",
      ];
  }

  return (
    <StModalBox>
      <StIcCancel />
      <StContentWrapper>
        <LeftWrapper />
        <RightWrapper />
      </StContentWrapper>
    </StModalBox>
  );
}

const StModalBox = styled.article``;
const StContentWrapper = styled.div``;
