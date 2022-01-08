import { Link } from "react-router-dom";

import { NavHeader } from ".";

export default function NavWrapper() {
  return (
    <section>
      <NavHeader />
      <nav>
        <ul>
          <li>
            <Link to="">홈</Link>
          </li>
          <li>
            <Link to="">서재</Link>
          </li>
          <li>
            <Link to="">마이페이지</Link>
          </li>
          <li>
            <Link to="">곧 만나요</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
