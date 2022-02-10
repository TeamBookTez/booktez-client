import { useState } from "react";

import { PeriQuestion } from "..";

// 나중에 type 다른 곳으로 옮기기
export interface PeriNoteTreeNode {
  content: string;
  children: PeriNoteTreeNode[];
}

const deepCopyTree = (root: PeriNoteTreeNode): PeriNoteTreeNode => {
  const newRoot = {
    content: root.content,
    children: root.children.map((node) => deepCopyTree(node)),
  };

  return newRoot;
};

const getNodeByPath = (node: PeriNoteTreeNode, path: number[]): PeriNoteTreeNode => {
  if (node === undefined) {
    throw new Error("something wrong");
  }

  if (path.length === 0) {
    return node;
  }

  return getNodeByPath(node.children[path[0]], path.slice(1));
};

export default function PeriNote() {
  const [root, setRoot] = useState<PeriNoteTreeNode>({ content: "ROOT", children: [] });

  const handleAddChild = (path: number[]) => {
    // 깊은 복사 후 위치를 찾아 새로운 node를 추가하고 root를 set에 넘김
    const newRoot = deepCopyTree(root);
    const current = getNodeByPath(newRoot, path);

    current.children.push({
      content: "",
      children: [],
    });

    setRoot(newRoot);
  };

  const handleSetContent = (path: number[], value: string) => {
    const newRoot = deepCopyTree(root);
    const current = getNodeByPath(newRoot, path);

    current.content = value;

    setRoot(newRoot);
  };

  const handleDeleteChild = (path: number[]) => {
    const newRoot = deepCopyTree(root);
    // 삭제할 때는 자신의 부모를 찾아서 children을 제거
    const parent = getNodeByPath(newRoot, path.slice(0, -1));

    parent.children.splice(path[path.length - 1], 1);
    setRoot(newRoot);
  };

  return (
    <form>
      <button type="button" onClick={() => handleAddChild([])}>
        추가
      </button>
      {root.children.map((node, idx) => (
        <PeriQuestion
          key={`input-${idx}`}
          idx={idx}
          path={[idx]}
          node={node}
          onAddChild={handleAddChild}
          onSetContent={handleSetContent}
          onDeleteChild={handleDeleteChild}
        />
      ))}
    </form>
  );
}
