import { PeriNoteTree } from "./PeriNote";

interface PeriQuestionProps {
  idx: number;
  node: PeriNoteTree;
}
export default function PeriQuestion(props: PeriQuestionProps) {
  const { node } = props;

  return <input value={node.content} />;
}
