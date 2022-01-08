import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="">전체</Link>
        </li>
        <li>
          <Link to="">독서 후</Link>
        </li>
        <li>
          <Link to="">독서 중</Link>
        </li>
        <li>
          <Link to="">독서 전</Link>
        </li>
      </ul>
    </nav>
  );
}
