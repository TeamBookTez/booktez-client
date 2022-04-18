import { StLabelQuestion } from "./styled/Question";

interface LabelQuestionProps {
  bgColor: string;
}

export default function LabelQuestion(props: LabelQuestionProps) {
  const { bgColor } = props;

  return <StLabelQuestion bgcolor={bgColor}>질문</StLabelQuestion>;
}
