import { PeriNoteTreeNode } from "./PeriNote";

interface PeriQuestionProps {
  idx: number;
  path: number[];
  node: PeriNoteTreeNode;
  onAddChild: (path: number[]) => void;
}
export default function PeriQuestion(props: PeriQuestionProps) {
  const { idx, path, node, onAddChild } = props;

  const onClickAddChild = () => {
    onAddChild(path);
  };

  return (
    <>
      <fieldset>
        <legend>질문 {idx}</legend>
        <input value={node.content} />
        <button type="button" onClick={onClickAddChild}>
          꼬리 질문
        </button>
      </fieldset>
      {node.children.map((node, i) => (
        <PeriQuestion
          key={`input-${idx}-${i}`}
          idx={i}
          path={[...path, i]}
          node={node}
          onAddChild={(path) => onAddChild(path)}
        />
      ))}
    </>
  );
}
