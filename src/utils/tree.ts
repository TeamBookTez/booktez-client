import { PeriNoteTreeNode } from "./dataType";

export const deepCopyTree = (root: PeriNoteTreeNode): PeriNoteTreeNode => {
  const newRoot = {
    type: root.type,
    content: root.content,
    children: root.children.map((node) => deepCopyTree(node)),
  };

  return newRoot;
};

export const getNodeByPath = (node: PeriNoteTreeNode, path: number[]): PeriNoteTreeNode => {
  if (node === undefined) {
    throw new Error("something wrong");
  }

  if (path.length === 0) {
    return node;
  }

  return getNodeByPath(node.children[path[0]], path.slice(1));
};
