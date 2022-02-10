import { useState } from "react";

import { PeriQuestion } from "..";

// 나중에 type 다른 곳으로 옮기기
export interface PeriNoteTree {
  content: string;
  children: PeriNoteTree[];
}

export default function PeriNote() {
  const [root, setRoot] = useState<PeriNoteTree>({ content: "ROOT", children: [] });

  return (
    <div>
      {root.children.map((node, idx) => (
        <PeriQuestion key={`input-${idx}`} idx={idx} node={node} />
      ))}
    </div>
  );
}
